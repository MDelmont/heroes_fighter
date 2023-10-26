import { CreateElementWithProps } from "../utils";
import { headers, columnKeyMapping } from "./constants";
import { createModal } from "./modal";
import { allCharacters, currentPage, showPage } from "./navigation";

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
  const tabBody = document.createElement("tbody");

  //Headers
  const headerRow = document.createElement("tr");
  headers.forEach((header, index) => {
    const tabHeader = CreateElementWithProps("th", { innerText: header })
    tabHeader.addEventListener("click", () =>
      sortTableByColumn(index, tabBody)
    );
    headerRow.appendChild(tabHeader);
  });

  tabHead.appendChild(headerRow);
  table.appendChild(tabHead);
  table.appendChild(tabBody);

  return { table, tabBody };
};

export const sortTableByColumn = (columnIndex, tabBody) => {
  const key = columnKeyMapping[columnIndex];

  // Inversez la direction si la colonne est déjà triée
  if (sortState.column === key) {
    sortState.direction = sortState.direction === "asc" ? "desc" : "asc";
  } else {
    sortState.column = key;
    sortState.direction = "asc";
  }

  allCharacters.sort((a, b) => {
    const valueA = key
      .split(".")
      .reduce((powerstats, stats) => powerstats[stats], a);
    const valueB = key
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
 * @param {Object} datas - Les données du personnage à ajouter.
 * @param {HTMLElement} tabBody - Le corps du tableau.
 */
export const addDataRow = (datas, tabBody) => {
  const dataRow = document.createElement("tr");

  const nameData = document.createElement("td");
  const nameLink = document.createElement("a");
  nameLink.href = "#";
  nameLink.innerHTML = datas.name;
  nameLink.addEventListener("click", (e) => {
    e.preventDefault();

    const modal = createModal(datas);
    modal.style.display = "block";
  });

  nameData.appendChild(nameLink);
  dataRow.appendChild(nameData);

  [
    handleNullValue(datas.powerstats.intelligence),
    handleNullValue(datas.powerstats.strength),
    handleNullValue(datas.powerstats.speed),
    handleNullValue(datas.powerstats.durability),
    handleNullValue(datas.powerstats.power),
    handleNullValue(datas.powerstats.combat),
    handleNullValue(datas.biography.publisher),
    handleNullValue(datas.appearance.gender),
    handleNullValue(datas.appearance.race),
  ].forEach((item) => {
    const tabData = document.createElement("td");
    tabData.innerText = item;
    dataRow.appendChild(tabData);
  });

  tabBody.appendChild(dataRow);
};

/**
 * Gère les valeurs nulles en remplaçant "null" par "N/A".
 *
 * @param {string} value - La valeur à vérifier.
 * @returns {string} La valeur traitée.
 */
export const handleNullValue = (value) => {
  return value === "null" ? "N/A" : value;
};
