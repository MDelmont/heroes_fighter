import {} from "./versusPage";
export let heroes1;
export let heroes2;
let stepGame = "init"; //init,start,tests,finish
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let testsResult = {};
const listGame = {
  brasDeFer: "Bras de fer",
  cuisiner: "Préparer à manger",
  course: "Course de voiture",
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
export const resetScore = () => {};
export const resetGame = () => {
  heroes1 = undefined;
  heroes2 = undefined;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  testsResult = {};
  stepGame = "init";
};

export const makeHeroes = (heroes, number) => {
  number === 1 ? (heroes1 = heroes) : (heroes2 = heroes);
};

export const runGameVersus = () => {
  var keys = Object.keys(listGame);
  keys.forEach((gameKey) => {
    testsResult[gameKey] = Math.round(Math.random());
    if (testsResult[gameKey] == 0) {
      scorePlayer1++;
    } else {
      scorePlayer2++;
    }
  });
};

export const whoWin = () => {
  return scorePlayer1 > scorePlayer2 ? heroes1 : heroes2;
};
