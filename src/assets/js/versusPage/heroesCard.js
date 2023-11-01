import { createElementWithProps } from "../utils";

/**
 * Crée une carte de héros HTML avec le nom, l'image, et indique si le héros est gagnant ou perdant dans un jeu.
 * @param {string} name - Le nom du héros à afficher sur la carte.
 * @param {string} imgurl - L'URL de l'image du héros.
 * @param {boolean} [game=false] - Un booléen indiquant si la carte est utilisée dans un contexte de jeu.
 * @param {boolean} [winner=true] - Un booléen indiquant si le héros est le gagnant. Pertinent seulement si `game` est `true`.
 * @returns {HTMLElement} Un élément div HTML qui représente la carte du héros, avec un paragraphe pour le nom et une image, et potentiellement un statut de gagnant ou perdant.
 */
export const makeHerosCard = (name, imgurl, game = false, winner = true) => {
  const heroesCard = createElementWithProps("div", { className: "heroes-card" });
  const p = createElementWithProps("p", { textContent: name });
  const img = createElementWithProps("img", { src : imgurl, alt: `Image de ${name}` });

  heroesCard.appendChild(p);
  heroesCard.appendChild(img);

  if (game) {
    heroesCard.append(
      createElementWithProps("p", {
        textContent: winner ? "Winner" : "Looser",
        className: `result-game ${winner ? "Winner" : "Looser"}`,
      })
    );
  }

  return heroesCard;
};
