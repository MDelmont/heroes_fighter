import {} from "./versusPage";
export let heroes1;
export let heroes2;
let stepGame = "init"; //init,start,tests,finish
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let testsResult = {};
const listGame = {
  escape_game: "Escape Game",
  arm_wrestling: "Bras de fer",
  martial_art: "Art Martial"
};

const gameStats = {
  escape_game: ["intelligence", "speed"],
  arm_wrestling: ["strength", "durability"],
  martial_art: ["power", "combat"]
};

export const getlistGame = () => {
  return listGame;
};
export const gettestResult = () => {
  return testsResult;
};
export const getheroes1 = () => {
  return heroes1;
};
export const getheroes2 = () => {
  return heroes2;
};

export const setheroes1 = (heroes) => {
  heroes1 = heroes;
};
export const setheroes2 = (heroes) => {
  heroes2 = heroes;
};

export const getstepGame = () => {
  return stepGame;
};

export const setstepGame = (step) => {
  if (step == "start") {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
  }
  stepGame = step;
};
export const getStatsgame = () => {
  return {
    stepGame,
    heroes1,
    heroes2,
    scorePlayer1,
    scorePlayer2,
    testsResult,
  };
};

export const resetGame = () => {
  heroes1 = undefined;
  heroes2 = undefined;
  stepGame = "init";
};

export const makeHeroes = (heroes, number) => {
  number === 1 ? (heroes1 = heroes) : (heroes2 = heroes);
};

export const runGameVersus = () => {
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  testsResult = {};
  
  Object.keys(listGame).forEach((gameKey) => {
    let hero1Score = 0;
    let hero2Score = 0;

    gameStats[gameKey].forEach(stat => {
      hero1Score += parseInt(heroes1.powerstats[stat], 10) || 0;
      hero2Score += parseInt(heroes2.powerstats[stat], 10) || 0;
    })


    if (hero1Score === hero2Score) {
      testsResult[gameKey] = Math.random() < 0.5 ? 0 : 1;
    } else {
      testsResult[gameKey] = hero1Score > hero2Score ? 0 : 1;
    }

    if (testsResult[gameKey] == 0) {
      scorePlayer1++;
    } else {
      scorePlayer2++;
    }
  })
};

export const whoWin = () => {
  return scorePlayer1 > scorePlayer2 ? heroes1 : heroes2;
};
