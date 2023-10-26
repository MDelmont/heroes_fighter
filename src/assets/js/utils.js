/**
 *
 * @param {*} str La chaîne d'entrée à partir de laquelle les accents doivent être supprimés.
 * @returns {string} La chaîne d'entrée sans aucun accent.
 */
export const removeAccents = (str) => {
  if (!str) return;

  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

/**
 * Crée un élément HTML avec des propriétés données.
 * @param {string} element - Le nom de la balise de l'élément à créer.
 * @param {Object} options  - Un objet contenant les options pour l'élément.
 * @returns {HTMLElement} L'élément créé.
 */
export const CreateElementWithProps = (element, options = {}) => {
  const el = document.createElement(element);

  if (options.className) el.classList.add(options.className);
  if (options.id) el.id = options.id;
  if (options.placeholder) el.placeholder = options.placeholder;
  if (options.textContent) el.textContent = options.textContent;
  if (options.value) el.value = options.value;
  if (options.type) el.type = options.type;
  if (options.name) el.name = options.name;
  if (options.for) el.for = options.for;
  if (options.innerText) el.innerText = options.innerText;

  return el;
};
