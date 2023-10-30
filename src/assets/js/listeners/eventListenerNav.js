
import { createContentMain } from "../main.js";
/**
 * Add listener to button for navigation page
 * @param {HTMLButtonElement} navBtn 
 */
export const addEventListenerNav = (navBtn) => {
    navBtn.addEventListener("click", () => {
      let elements = document.querySelectorAll(".title-page");
  
      elements.forEach((e) => { e.classList.remove("active") });
      navBtn.classList.add("active");
  
      createContentMain(navBtn.textContent.toLowerCase());
    });
  };