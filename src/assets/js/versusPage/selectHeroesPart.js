import { createElementWithProps } from "../utils";
import { makeBandeauCont } from "../bandeau.js";
import { eventListenerButtonChoiceHeroes } from "../listeners/eventListenerChoiceHeroes";

/**
 * Crée et ajoute une section pour la sélection des héros dans le contenu principal de la page.
 * Cette fonction crée un bouton qui, une fois cliqué, permet à l'utilisateur de choisir des héros.
 *
 * @returns {void} Ne retourne rien car la fonction opère des modifications directement sur le DOM.
 */
export const makeSelectHeroesPart = () => {
  const mainContainer = document.querySelector("#content");
  const selectHeroesButton = createElementWithProps("button", { innerText: "Select Heroes", className: "red", id: "select-character-btn" });

  eventListenerButtonChoiceHeroes(selectHeroesButton);
  const buttonContainer = makeBandeauCont([selectHeroesButton]);

  mainContainer.appendChild(buttonContainer);
};
