import { ITEMS_PER_PAGE } from "./constants";
import { addDataRow } from "./tableFunctions";
import { pageDisplay } from "./main";

export let currentPage = 1;
export let allCharacters = [];

/**
 * Gère la navigation entre les pages.
 *
 * @param {string} direction - La direction de la navigation ("prev" ou "next").
 * @param {HTMLElement} tabBody - Le corps du tableau.
 */
export const handleNavigation = (direction, tabBody) => {
  const totalPages = Math.ceil(allCharacters.length / ITEMS_PER_PAGE);

  if (direction === "prev" && currentPage > 1) {
    currentPage--;
  } else if (direction === "next" && currentPage < totalPages) {
    currentPage++;
  }

  showPage(currentPage, tabBody);
  updatePageDisplay();
};

/**
 * Affiche les personnages de la page spécifiée.
 *
 * @param {number} page - Le numéro de page à afficher.
 * @param {HTMLElement} tabBody - Le corps du tableau.
 * @param {Object} characters - Les personnages à afficher sur la page.
 */
export const showPage = (page, tabBody, characters = allCharacters) => {
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  
  if (characters) allCharacters = characters;
  tabBody.innerHTML = "";

  const currentItems = characters.slice(startIndex, endIndex);
  currentItems.forEach((character) => {
    addDataRow(character, tabBody);
  });
};

/**
 * Met à jour l'affichage du numéro de page.
 * @param {Object} characters - Les personnages à afficher sur la page.
 */
export const updatePageDisplay = (characters = allCharacters) => {
  const maxNumberPage = Math.ceil(characters.length / ITEMS_PER_PAGE)
  currentPage = currentPage > maxNumberPage ? maxNumberPage : currentPage;

  pageDisplay.innerText = `Page ${currentPage} sur ${maxNumberPage}`;
};

export const setPageCharacters = (characters) => {
  allCharacters = characters;
};
