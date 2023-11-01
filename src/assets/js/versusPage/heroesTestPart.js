import { createElementWithProps } from "../utils";
import { makeHerosCard } from "./heroesCard.js";
import imgEscapeGame from "../../img/test/escapeGame.png";
import imgArmWrestling from "../../img/test/armWrestling.png";
import imgFight from "../../img/test/fight.png";

const imageMap = {
  escape_game: imgEscapeGame,
  arm_wrestling: imgArmWrestling,
  martial_art: imgFight
};

/**
 * Crée une partie HTML pour un test de jeu "versus" avec les héros et le nom du test.
 * @param {string} testName - Le nom du test à afficher
 * @param {string} imgName - Le nom de l'image à utiliser, correspondant à la clé dans `imageMap`.
 * @param {boolean} winner - Booléen ou index indiquant le gagnant (0 pour hero1, 1 pour hero2).
 * @param {object} hero1 - Un objet représentant le premier héros, doit contenir `name` et `image.url`.
 * @param {object} hero2 - Un objet représentant le deuxième héros, doit contenir `name` et `image.url`.
 * @returns {HTMLElement} L'élément div HTML qui contient la structure du test "versus" avec les héros et l'image du jeu.
 */
export const makeContTestGameVersus = (testName = "Course de voiture", imgName = "course", winner = 0, hero1, hero2 ) => {
  const divContainer = createElementWithProps("div", { className: "cont-versus-test" });
  const titre = createElementWithProps("h2", { textContent: testName });
  const divContent = createElementWithProps("div", { className: "cont-versus-test-corp" });
  const imgGame = createElementWithProps("img", {src: imageMap[imgName] || null, alt: `Image de ${testName}` });

  divContent.appendChild(makeHerosCard(hero1?.name, hero1?.image?.url, true, winner == 0));
  divContent.appendChild(imgGame);
  divContent.appendChild(makeHerosCard(hero2?.name, hero2?.image?.url, true, winner == 1));
  divContainer.appendChild(titre);
  divContainer.appendChild(divContent);

  return divContainer;
};
