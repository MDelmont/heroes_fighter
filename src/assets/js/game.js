import {} from "./versusPage";
export let heroes1;
export let heroes2;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let testsResult = {};

let stepGame = "init"; //init,start,tests,finish

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
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  testsResult = {};
  stepGame = "init";
};

export const makeHeroes = (heroes, number) => {
  number === 1 ? (heroes1 = heroes) : (heroes2 = heroes);
};

export const makevisuelVersus = (heroes, number) => {};
