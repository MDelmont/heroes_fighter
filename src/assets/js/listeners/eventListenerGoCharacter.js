import { createContentMain } from "../main.js";
import { getHero1, getHero2, setStepGame } from "../game.js";

/**
 * Ajoute un écouteur d'événements au bouton pour passer à la page des personnages.
 * Si les deux héros ne sont pas définis, affiche une alerte. Sinon, passe à l'étape 'start'
 * et met à jour le contenu principal pour afficher la confrontation.
 *
 * @param {HTMLButtonElement} buttonGoCharacter - Le bouton qui déclenche le changement de page.
 */
export const addEventListenerToGoCharacterButton = (buttonGoCharacter) => {
  buttonGoCharacter.addEventListener("click", () => {
    if (!getHero1() || !getHero2()) {
      return alert("Veuillez sélectionner deux héros pour le combat.");
    }

    setStepGame("start");

    const navButtons = document.querySelectorAll(".title-page");
    navButtons.forEach((navButton) => {
      navButton.classList.toggle("active", navButton.textContent === "Versus");
    });

    createContentMain("versus");
  });
};
