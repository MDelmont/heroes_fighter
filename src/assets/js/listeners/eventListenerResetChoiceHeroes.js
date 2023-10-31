import { createContentMain } from "../main.js";
import { resetGame } from "../game.js";
/**
 *
 * @param {HTMLButtonElement} buttonResetHeroes
 */
export const eventListenerButtonResetChoiceHeroes = (buttonResetHeroes) => {
  buttonResetHeroes.addEventListener("click", () => {
    const navBtns = document.querySelectorAll(".title-page");

    navBtns.forEach((navBtn) => {
      navBtn.classList.remove("active");
      if (navBtn.textContent == "Characters") navBtn.classList.add("active");
    });
    resetGame();
    createContentMain("characters");
  });
};
