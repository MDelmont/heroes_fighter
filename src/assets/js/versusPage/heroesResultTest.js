import { createElementWithProps } from "../utils";

/**
 * Crée un élément HTML représentant les résultats d'un test, y compris le nom du gagnant, son image et le score.
 * @param {string} winnerName - Le nom du gagnant à afficher.
 * @param {string} urlImg - Le chemin URL de l'image du gagnant.
 * @param {number[]} score - Un tableau contenant les scores.
 * @returns {HTMLElement} Un élément div HTML contenant les détails du résultat, structuré avec un titre, une image et un paragraphe pour le score.
 */
export const makeContResultAllTest = (winnerName, urlImg, score) => {
  const div = createElementWithProps("div", { className: "cont-result-versus" });
  const titre = createElementWithProps("h2", { textContent: `Winner is ${winnerName}` });
  const img = createElementWithProps("img", { src: urlImg, alt: `Image de ${winnerName}` });
  const result = createElementWithProps("p", { textContent: `${score[0]} - ${score[1]}`, className: "result-all-game" });

  div.appendChild(titre);
  div.appendChild(img);
  div.appendChild(result);

  return div;
};
