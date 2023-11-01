import { createContentMain } from "../main.js";

/**
 * Ajoute un écouteur d'événements au bouton de sélection des héros.
 * Lorsque le bouton est cliqué, le contenu principal est mis à jour pour afficher les personnages.
 *
 * @param {HTMLButtonElement} buttonSelectHeroes - Le bouton auquel l'écouteur est attaché.
 */
export const addEventListenerToSelectHeroesButton = (buttonSelectHeroes) => {
  buttonSelectHeroes.addEventListener("click", () => {
    const navButtons = document.querySelectorAll(".title-page");

    navButtons.forEach((navButton) => {
      navButton.classList.toggle("active", navButton.textContent === "Characters");
    });

    createContentMain("characters");
  });
};