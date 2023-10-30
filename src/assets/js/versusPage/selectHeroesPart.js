import { createElementWithProps } from "../utils";
import { makeBandeauCont } from "../bandeau.js";
import { eventListenerButtonChooseHeroes } from "../listener.js";
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
  eventListenerButtonChooseHeroes(btn);
  const btnCont = makeBandeauCont([btn]);

  main.appendChild(btnCont);
};
