import { createContentMain } from "../main.js";
import { resetGame } from "../game.js";

/**
 * Ajoute un écouteur d'événements au bouton de réinitialisation des héros. 
 * Quand ce bouton est cliqué, il réinitialise le jeu et charge le contenu de la page des personnages.
 *
 * @param {HTMLButtonElement} buttonResetHeroes - Le bouton de réinitialisation des choix de héros.
 */
export const addEventListenerToResetChoiceHeroesButton = (buttonResetHeroes) => {
  buttonResetHeroes.addEventListener("click", () => {
    const navButtons = document.querySelectorAll(".title-page");

    navButtons.forEach((navButton) => {
      navButton.classList.toggle("active", navButton.textContent === "Characters");
    });

    resetGame();
    createContentMain("characters");
  });
};
