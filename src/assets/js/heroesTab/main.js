import { datas } from "../datas";
import { createTable, tabBody } from "./tableFunctions";
import { handleNavigation, showPage, updatePageDisplay, setPageCharacters } from "./navigation";
import { createElementWithProps } from "../utils";

export let pageDisplay;

// Initialisation du tableau et des boutons de navigation.
export const createHeroesTab = () => {
  const main = document.querySelector("#content");
  const tablePart = createElementWithProps("div", { id: "tablePart"});
  const tableContainer = createElementWithProps("div", { id: "tableContainer" });

  tablePart.appendChild(tableContainer);
  main.appendChild(tablePart);

  const table = createTable();
  tableContainer.appendChild(table);
  
  setPageCharacters(datas.results);

  showPage(1, tabBody);

  // Création de l'affichage de la page et des boutons de navigation.
  pageDisplay = document.createElement("span");
  updatePageDisplay();

  const prevButton = createElementWithProps("button", { innerText: "Précédent" });
  prevButton.addEventListener("click", () => handleNavigation("prev", tabBody));

  const nextButton = createElementWithProps("button", { innerText: "Suivant" });
  nextButton.addEventListener("click", () => handleNavigation("next", tabBody));

  const tableNav = createElementWithProps("div", { id: "tableNav" });

  tableNav.appendChild(prevButton);
  tableNav.appendChild(pageDisplay);
  tableNav.appendChild(nextButton);
  // Insération juste avant le tableau
  tableContainer.before(tableNav);
};