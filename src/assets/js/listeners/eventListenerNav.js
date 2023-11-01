
import { createContentMain } from "../main.js";

/**
 * Ajoute un écouteur d'événements à un bouton de navigation. Lorsque le bouton est cliqué, 
 * il active visuellement le bouton sélectionné et charge le contenu de la page correspondante.
 *
 * @param {HTMLButtonElement} navBtn - Le bouton de navigation auquel l'écouteur est attaché.
 */
export const addEventListenerToNavigationButton = (navBtn) => {
  navBtn.addEventListener("click", () => {
    const navButtons = document.querySelectorAll(".title-page");

    navButtons.forEach((titlePage) => { titlePage.classList.remove("active") });
    navBtn.classList.add("active");

    createContentMain(navBtn.textContent.toLowerCase());
  });
};