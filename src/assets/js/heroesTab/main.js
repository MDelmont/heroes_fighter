import { datas } from "../datas";
import { createTable } from "./tableFunctions";
import {
  handleNavigation,
  showPage,
  updatePageDisplay,
  setPageCharacters,
} from "./navigation";

export let pageDisplay;

// Initialisation du tableau et des boutons de navigation.
export const createHeroesTab = () => {
  const main = document.querySelector("#content");
  const tablePart = document.createElement("div");
  const tableContainer = document.createElement("div");

  tablePart.id = "tablePart";
  tableContainer.id = "tableContainer";
  tablePart.appendChild(tableContainer);
  main.appendChild(tablePart);

  const { table, tabBody } = createTable();
  tableContainer.appendChild(table);

  setPageCharacters(datas.results);

  showPage(1, tabBody);

  // Création de l'affichage de la page et des boutons de navigation.
  pageDisplay = document.createElement("span");
  updatePageDisplay();

  const prevButton = document.createElement("button");
  prevButton.innerText = "Précédent";
  prevButton.addEventListener("click", () => handleNavigation("prev", tabBody));

  const nextButton = document.createElement("button");
  nextButton.innerText = "Suivant";
  nextButton.addEventListener("click", () => handleNavigation("next", tabBody));

  const tableNav = document.createElement("div");
  tableNav.id = "tableNav";
  tableNav.appendChild(prevButton);
  tableNav.appendChild(pageDisplay);
  tableNav.appendChild(nextButton);
  // Insération juste avant le tableau
  tableContainer.before(tableNav);
};