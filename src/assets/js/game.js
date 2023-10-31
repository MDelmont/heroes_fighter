import {} from "./versusPage/versusPage";
export let hero1;
export let hero2;
let stepGame = "init"; //init,start,tests,finish
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let testsResult = {};
const listGame = {
  escape_game: "Escape Game",
  arm_wrestling: "Bras de fer",
  martial_art: "Art Martial",
};

const gameStats = {
  escape_game: ["intelligence", "speed"],
  arm_wrestling: ["strength", "durability"],
  martial_art: ["power", "combat"],
};

/**
 * getter listGame
 * @returns {object}
 */
export const getlistGame = () => {
  return listGame;
};
/**
 * getter testsResult
 * @returns {object}
 */
export const gettestResult = () => {
  return testsResult;
};
/**
 * getter hero1
 * @returns {object}
 */
export const gethero1 = () => {
  return hero1;
};

/**
 * getter hero2
 * @returns {object}
 */
export const gethero2 = () => {
  return hero2;
};
/**
 * setter hero1
 * @param {object} hero 
 */
export const sethero1 = (hero) => {
  hero1 = hero;
};
/**
 * setter hero2
 * @param {object} hero 
 */
export const sethero2 = (hero) => {
  hero2 = hero;
};
/**
 * getter stepGame
 * @returns {String}
 */
export const getstepGame = () => {
  return stepGame;
};

/**
 * Reset score and attribute stepGame
 * @param {String} step 
 */
export const setstepGame = (step) => {
  if (step == "start") {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
  }
  stepGame = step;
};
/**
 * Return all proporty of game
 * @returns {object} Object with all property of game
 */
export const getStatsgame = () => {
  return {
    stepGame,
    hero1,
    hero2,
    scorePlayer1,
    scorePlayer2,
    testsResult,
  };
};

/**
 * Reset game for new game
 */
export const resetGame = () => {
  hero1 = undefined;
  hero2 = undefined;
  stepGame = "init";
};

/**
 * Attribuate hero to the goo hero
 * @param {Object} hero
 * @param {Integer} number
 */
export const makehero = (hero, number) => {
  number === 1 ? (hero1 = hero) : (hero2 = hero);
};

/**
 * Simulate game between two heroes
 */
export const runGameVersus = () => {
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  testsResult = {};

  Object.keys(listGame).forEach((gameKey) => {
    let hero1Score = 0;
    let hero2Score = 0;

    gameStats[gameKey].forEach((stat) => {
      hero1Score += parseInt(hero1.powerstats[stat], 10) || 0;
      hero2Score += parseInt(hero2.powerstats[stat], 10) || 0;
    });

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
  });
};

/**
 * Return object hero win the game
 * @returns {object}
 */
export const whoWin = () => {
  return scorePlayer1 > scorePlayer2 ? hero1 : hero2;
};
