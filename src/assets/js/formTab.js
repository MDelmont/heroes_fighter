import { env, data, takeList, datas } from "./datas";
import { CreateElementWithProps, removeAccents } from "./utils";
import { allCharacters, showPage, updatePageDisplay } from "./heroesTab/navigation";
import { tBody } from "./heroesTab/main";

let inputSearch;
let publisherSelect;
let raceSelect;

/**
 * Crée un formulaire avec une zone de saisie et deux sélecteurs, puis l'ajoute à l'élément principal.
 */
export const createFormTab = () => {
  const mainContainer = document.querySelector("#content");
  const formContainer = CreateElementWithProps("div", {className: "form-tab-part"})

  inputSearch = CreateElementWithProps("input", { placeholder: "Chercher un nom de héro", className: "inpt-filter-name" });
  inputSearch.addEventListener("input", () => filterTable());
  formContainer.appendChild(inputSearch);

  publisherSelect = createSelectContainer("Éditeur", "select-editeur");
  publisherSelect.querySelector("select").addEventListener("change", () => filterTable());

  raceSelect = createSelectContainer("Race", "select-race");
  raceSelect.querySelector('select').addEventListener('change', () => filterTable());

  formContainer.appendChild(publisherSelect);
  formContainer.appendChild(raceSelect);

  mainContainer.appendChild(formContainer);
};

/**
 * Crée un conteneur de sélecteur avec un label et un sélecteur.
 * 
 * @param {string} name - Le nom affiché sur le label.
 * @param {string} id - L'ID à attribuer au sélecteur.
 * @returns {HTMLElement} Le conteneur de sélecteur.
 */
const createSelectContainer = (name, id) => {
  const div = CreateElementWithProps("div", { className: "select-form-tab" })

  const label = CreateElementWithProps("label", { textContent: name, for: id })
  div.appendChild(label);

  const select = createSelectWithOptions(name, id);
  div.appendChild(select);

  return div;
}

/**
 * Crée un sélecteur avec des options.
 * 
 * @param {string} name - Le nom associé au sélecteur.
 * @param {string} id - L'ID à attribuer au sélecteur.
 * @returns {HTMLElement} Le sélecteur.
 */
const createSelectWithOptions = (name, id) => {
  const select = CreateElementWithProps("select", { className: "select-tab", id: id })

  const optionsValues = takeList(removeAccents(name).toLowerCase());
  optionsValues.forEach((optionValue) => {
    const option = CreateElementWithProps("option", { value: optionValue, textContent: optionValue });
    select.appendChild(option);
  });

  return select;
}

const filterTable = () => {
  const searchValue = inputSearch.value;
  const publisherValue = publisherSelect.querySelector('select').value;
  const raceValue = raceSelect.querySelector('select').value;

  let characters = datas.results.filter((character) => {
    const matchSearch = removeAccents(character.name).toLowerCase().includes(searchValue) || searchValue?.trim()?.length == 0;
    const matchPublisher = character.biography.publisher === publisherValue || publisherValue?.trim()?.length == 0;
    const matchRace = character.appearance.race === raceValue || raceValue?.trim()?.length == 0;

    return matchSearch && matchPublisher && matchRace
  });

  showPage(1, tBody, characters);
  updatePageDisplay(characters);
};