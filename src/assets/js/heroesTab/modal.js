import { createElementWithProps, handleNullValue } from "../utils";

/**
 * Crée une modale pour un personnage donné.
 * @param {Object} character - Les données du personnage.
 * @returns {HTMLElement} L'élément modale créé.
 */
export const createModal = (character) => {
  const modal = createElementWithProps("div", { className: "modal" });
  const modalContent = createElementWithProps("div", { className: "modal-content" });
  const closeButton = createCloseButton();

  modalContent.appendChild(closeButton);
  modalContent.appendChild(createHeaderSection(character));
  modalContent.appendChild(createCategoriesContainer(character));
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  return modal;
};

/**
 * Crée le bouton de fermeture pour le modal.
 * @returns {HTMLElement} L'élément bouton de fermeture créé.
 */
const createCloseButton = () => {
  const closeButton = createElementWithProps("span", { className: "close-button", innerHTML: "&times;" });
  // closeButton.inn
  closeButton.addEventListener("click", () => {
    const modal = closeButton.closest(".modal");
    modal.style.display = "none";
    document.body.removeChild(modal);
  });

  return closeButton;
};

/**
 * Crée la section d'en-tête pour la modale.
 * @param {Object} character - Les données du personnage.
 * @returns {HTMLElement} La section d'en-tête créée.
 */
const createHeaderSection = (character) => {
  const header = createElementWithProps("div", { className: "character-header"});

  header.innerHTML = `
    <img src="${character.image.url}" alt="${character.name}">
    <div>
        <h2>${character.name}</h2>
        <p><strong>Full Name:</strong> ${character.biography["full-name"]}</p>
    </div>
  `;

  return header;
};

/**
 * Crée le conteneur des catégories pour le modal.
 * @param {Object} character - Les données du personnage.
 * @returns {HTMLElement} Le conteneur des catégories créé.
 */
const createCategoriesContainer = (character) => {
  const container = createElementWithProps("div", { className: "categories-container"});

  container.appendChild(
    createCategory("Biography", {
      Aliases: character.biography.aliases.join(", "),
      "Alter Egos": character.biography["alter-egos"],
      "First Appearance": character.biography["first-appearance"],
      "Place of Birth": character.biography["place-of-birth"],
    })
  );

  container.appendChild(
    createCategory("Appearance", {
      Gender: character.appearance.gender,
      Race: character.appearance.race,
      Height: character.appearance.height.join(" / "),
      Weight: character.appearance.weight.join(" / "),
    })
  );

  container.appendChild(createCategory("Powerstats", character.powerstats));
  container.appendChild(
    createCategory("Connections", {
      "Group Affiliation": character.connections["group-affiliation"],
      Relatives: character.connections.relatives,
    })
  );

  return container;
};

/**
 * Crée une section de catégorie pour la modale.
 * @param {string} title - Le titre de la catégorie.
 * @param {Object} contents - Le contenu de la catégorie.
 * @returns {HTMLElement} La section de catégorie créée.
 */
const createCategory = (title, contents) => {
  const category = createElementWithProps("div", { className: "category"});
  let innerHTML = `<h3>${title}</h3>`;

  for (let content in contents) {
    innerHTML += `<p><strong>${ content.charAt(0).toUpperCase() + content.slice(1) }:</strong> ${handleNullValue(contents[content])}</p>`;
  }

  category.innerHTML = innerHTML;

  return category;
};
