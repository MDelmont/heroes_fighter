import { datas } from "./datas";
import { createModal } from "./modal";

let pageDisplay;
let currentPage = 1;
let allCharacters = [];
let sortState = {
  column: null,
  direction: "asc", // 'asc' pour croissant, 'desc' pour décroissant
};

const ITEMS_PER_PAGE = 15;

const headers = [
  "Nom",
  "Intelligence",
  "Force",
  "Vitesse",
  "Durabilité",
  "Pouvoir",
  "Combat",
  "Éditeur",
  "Genre",
  "Race",
];

const columnKeyMapping = [
  "name",
  "powerstats.intelligence",
  "powerstats.strength",
  "powerstats.speed",
  "powerstats.durability",
  "powerstats.power",
  "powerstats.combat",
  "biography.publisher",
  "appearance.gender",
  "appearance.race",
];

/**
 * Crée un tableau HTML avec une en-tête.
 *
 * @returns {Object} L'objet contenant le tableau et son corps.
 */
const createTable = () => {
  const table = document.createElement("table");
  const tabHead = document.createElement("thead");
  const tabBody = document.createElement("tbody");

  //Headers
  const headerRow = document.createElement("tr");
  headers.forEach((header, index) => {
    const tabHeader = document.createElement("th");
    tabHeader.innerText = header;
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

const sortTableByColumn = (columnIndex, tabBody) => {
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
const addDataRow = (datas, tabBody) => {
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
const handleNullValue = (value) => {
  return value === "null" ? "N/A" : value;
};

/**
 * Gère la navigation entre les pages.
 *
 * @param {string} direction - La direction de la navigation ("prev" ou "next").
 * @param {HTMLElement} tabBody - Le corps du tableau.
 */
const handleNavigation = (direction, tabBody) => {
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
 */
const showPage = (page, tabBody) => {
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  tabBody.innerHTML = "";

  const currentItems = allCharacters.slice(startIndex, endIndex);
  currentItems.forEach((character) => {
    addDataRow(character, tabBody);
  });
};

/**
 * Met à jour l'affichage du numéro de page.
 */
const updatePageDisplay = () => {
  pageDisplay.innerText = `Page ${currentPage} sur ${Math.ceil(
    allCharacters.length / ITEMS_PER_PAGE
  )}`;
};

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

  allCharacters = datas.results;

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
