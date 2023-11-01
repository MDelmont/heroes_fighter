import { createContentMain } from "../main.js";
import { setStepGame, runGameVersus } from "../game.js";

/**
 * Ajoute un écouteur d'événement sur le bouton pour démarrer le jeu entre les héros.
 * Initialise le jeu à la phase de tests et affiche la page de confrontation.
 * 
 * @param {HTMLButtonElement} buttonStartGameHeroes - Le bouton qui démarre la partie de jeu entre les héros.
 */
export const eventListenerButtonStartGameHeroes = (buttonStartGameHeroes) => {
  buttonStartGameHeroes.addEventListener("click", () => {
    setStepGame("tests");
    runGameVersus();
    createContentMain("versus");
  });
};
