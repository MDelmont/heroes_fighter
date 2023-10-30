import { createElementWithProps, handleNullValue } from "../../utils";
import { headers, columnKeyMapping } from "./constants";
import { createModal } from "./modal";
import { allCharacters, currentPage, showPage } from "./navigation";

export const tabBody = document.createElement("tbody");

let sortState = {
  column: null,
  direction: "asc",
};

/**
 * Crée un tableau HTML avec une en-tête.
 *
 * @returns {Object} L'objet contenant le tableau et son corps.
 */
export const createTable = () => {
  const table = document.createElement("table");
  const tabHead = document.createElement("thead");

  //Headers
  const headerRow = document.createElement("tr");
  headers.forEach((header, index) => {
    const tabHeader = createElementWithProps("th", { innerText: header });
    tabHeader.addEventListener("click", () =>
      sortTableByColumn(index, tabBody)
    );
    headerRow.appendChild(tabHeader);
  });

  tabHead.appendChild(headerRow);
  table.appendChild(tabHead);
  table.appendChild(tabBody);

  return table;
};

/**
 * Trie le tableau de données "allCharacters" par la colonne spécifiée.
 *
 * @param {number} columnIndex - L'indice de la colonne par laquelle trier le tableau.
 * @param {HTMLElement} tabBody - L'élément HTML du corps du tableau où les données sont affichées.
 */
export const sortTableByColumn = (columnIndex, tabBody) => {
  const caracteristics = columnKeyMapping[columnIndex];

  // Inversez la direction si la colonne est déjà triée
  if (sortState.column === caracteristics) {
    sortState.direction = sortState.direction === "asc" ? "desc" : "asc";
  } else {
    sortState.column = caracteristics;
    sortState.direction = "asc";
  }

  allCharacters.sort((a, b) => {
    const valueA = caracteristics
      .split(".")
      .reduce((powerstats, stats) => powerstats[stats], a);
    const valueB = caracteristics
      .split(".")
      .reduce((powerstats, stats) => powerstats[stats], b);

    // Si les valeurs sont des nombres
    if (!isNaN(valueA) && !isNaN(valueB)) {
      return sortState.direction === "asc"
        ? parseInt(valueA) - parseInt(valueB)
        : parseInt(valueB) - parseInt(valueA);
    }

    // Si les valeurs sont des lettres
    if (valueA < valueB) return sortState.direction === "asc" ? -1 : 1;
    if (valueA > valueB) return sortState.direction === "asc" ? 1 : -1;
    return 0;
  });

  showPage(currentPage, tabBody);
};

/**
 * Ajoute une ligne de données au tableau.
 *
 * @param {Object} character - Les données du personnage à ajouter.
 * @param {HTMLElement} tabBody - Le corps du tableau.
 */
export const addDataRow = (character, tabBody) => {
  const dataRow = document.createElement("tr");
  const nameData = document.createElement("td");

  const nameLink = createElementWithProps("a", {
    href: "#",
    innerText: character.name,
  });
  nameLink.addEventListener("click", (e) => {
    e.preventDefault();

    const modal = createModal(character);
    modal.style.display = "block";
  });

  nameData.appendChild(nameLink);
  dataRow.appendChild(nameData);

  [
    handleNullValue(character.powerstats.intelligence),
    handleNullValue(character.powerstats.strength),
    handleNullValue(character.powerstats.speed),
    handleNullValue(character.powerstats.durability),
    handleNullValue(character.powerstats.power),
    handleNullValue(character.powerstats.combat),
    handleNullValue(character.biography.publisher),
    handleNullValue(character.appearance.gender),
    handleNullValue(character.appearance.race),
  ].forEach((stat) => {
    const tabData = createElementWithProps("td", { innerText: stat });
    dataRow.appendChild(tabData);
  });

  tabBody.appendChild(dataRow);
};
