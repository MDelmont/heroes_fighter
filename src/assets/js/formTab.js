import { takeList } from "./datas";
import { CreateElementWithProps, removeAccents } from "./utils";

/**
 * Crée un formulaire avec une zone de saisie et deux sélecteurs, puis l'ajoute à l'élément principal.
 */
export const createFormTab = () => {
  const mainContainer = document.querySelector("#content");
  const formContainer = CreateElementWithProps("div", {className: "form-tab-part"})

  const inputSearch = CreateElementWithProps("input", { placeholder: "Chercher un nom de héro", className: "inpt-filter-name" });
  formContainer.appendChild(inputSearch);

  const publisherSelect = createSelectContainer("Éditeur", "select-editeur");
  const raceSelect = createSelectContainer("Race", "select-race");

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
function createSelectContainer(name, id) {
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
function createSelectWithOptions(name, id) {
  const select = CreateElementWithProps("select", { className: "select-tab", id: id })

  const optionsValues = takeList(removeAccents(name).toLowerCase());
  optionsValues.forEach((optionValue) => {
    const option = document.createElement("option");
    option.value = optionValue;
    option.text = optionValue;
    select.appendChild(option);
  });

  return select;
}
