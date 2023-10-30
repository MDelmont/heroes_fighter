import { createContentMain } from "../main.js";

/**
 * Add listene to button choise heroes
 * @param {HTMLButtonElement} buttonselectHeroes 
 */
export const eventListenerButtonChoiceHeroes = (buttonselectHeroes) => {
    buttonselectHeroes.addEventListener("click", () => {
      const navBtns = document.querySelectorAll(".title-page");
  
      navBtns.forEach((navBtn) => {
        navBtn.classList.remove("active");
        if (navBtn.textContent == "Characters") navBtn.classList.add("active");
  
        createContentMain("characters");
      });
    });
  };
  