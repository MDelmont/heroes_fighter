import { createContentMain } from "../main.js";
import {
  gethero1,
  gethero2,
  setstepGame,
} from "../game.js";
/**
 * Add listene to button go character
 * @param {HTMLButtonElement} buttonGoCharacter
 */
export const eventListenerButtonGoCharacter = (buttonGoCharacter) => {
  buttonGoCharacter.addEventListener("click", () => {
    if (!(gethero1() && gethero2()))
      return alert("Renseigner les héros à faire combattre !");

    setstepGame("start");

    const navBtns = document.querySelectorAll(".title-page");
    navBtns.forEach((navBtn) => {
      navBtn.classList.remove("active");
      if (navBtn.textContent == "Versus") navBtn.classList.add("active");

      createContentMain("versus");
    });
  });
};