import { createContentMain } from "../main.js";
import { setstepGame, runGameVersus } from "../game.js";
/**
 *
 * @param {HTMLButtonElement} buttonStartGameHeroes
 */
export const eventListenerButtonStartGameHeroes = (buttonStartGameHeroes) => {
  buttonStartGameHeroes.addEventListener("click", () => {
    setstepGame("tests");
    runGameVersus();
    createContentMain("versus");
  });
};
