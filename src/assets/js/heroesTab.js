import { data } from "./datas";

let allCharacters = [];
let currentPage = 1;
let pageDisplay;

const ITEMS_PER_PAGE = 20;
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
  headers.forEach((header) => {
    const tabHeader = document.createElement("th");
    tabHeader.innerText = header;
    headerRow.appendChild(tabHeader);
  });

  tabHead.appendChild(headerRow);
  table.appendChild(tabHead);
  table.appendChild(tabBody);

  return { table, tabBody };
};

/**
 * Ajoute une ligne de données au tableau.
 *
 * @param {Object} data - Les données du personnage à ajouter.
 * @param {HTMLElement} tabBody - Le corps du tableau.
 */
const addDataRow = (data, tabBody) => {
  const dataRow = document.createElement("tr");
  [
    data.name,
    handleNullValue(data.powerstats.intelligence),
    handleNullValue(data.powerstats.strength),
    handleNullValue(data.powerstats.speed),
    handleNullValue(data.powerstats.durability),
    handleNullValue(data.powerstats.power),
    handleNullValue(data.powerstats.combat),
    handleNullValue(data.biography.publisher),
    handleNullValue(data.appearance.gender),
    handleNullValue(data.appearance.race),
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
 */
const handleNavigation = (direction) => {
  const totalPages = Math.ceil(allCharacters.length / ITEMS_PER_PAGE);

  if (direction === "prev" && currentPage > 1) {
    currentPage--;
  } else if (direction === "next" && currentPage < totalPages) {
    currentPage++;
  }

  showPage(currentPage);
  updatePageDisplay();
};

/**
 * Affiche les personnages de la page spécifiée.
 *
 * @param {number} page - Le numéro de page à afficher.
 */
const showPage = (page) => {
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
const tableContainer = document.getElementById("tableContainer");
const { table, tabBody } = createTable();
tableContainer.appendChild(table);

data()
  .then((response) => {
    allCharacters = response.results;

    showPage(1);

    // Création de l'affichage de la page et des boutons de navigation.
    pageDisplay = document.createElement("span");
    updatePageDisplay();

    const prevButton = document.createElement("button");
    prevButton.innerText = "Précédent";
    prevButton.addEventListener("click", () => handleNavigation("prev"));

    const nextButton = document.createElement("button");
    nextButton.innerText = "Suivant";
    nextButton.addEventListener("click", () => handleNavigation("next"));

    // Insération juste après le tableau
    tableContainer.after(prevButton, pageDisplay, nextButton);
  })
  .catch((error) => {
    console.log("Erreur lors de la création de la table", error);
  });
