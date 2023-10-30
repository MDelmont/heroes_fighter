import { createElementWithProps } from "../utils";
import { makeBandeauCont } from "../bandeau.js";
import { eventListenerButtonChoiceHeroes } from "../listeners/eventListenerChoiceHeroes";
/**
 * Create and append Select heroes part
 */
export const makeSelectHeroesPart = () => {
  const main = document.querySelector("#content");

  const btn = createElementWithProps("button", {
    innerText: "Select Heroes",
    className: "red",
    id: "select-character-btn",
  });
  // Add event listener on btn
  eventListenerButtonChoiceHeroes(btn);
  const btnCont = makeBandeauCont([btn]);

  main.appendChild(btnCont);
};
