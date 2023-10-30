import { createElementWithProps } from "../utils";
import { makeHerosCard } from "./heroesCard.js";
import imgEscapeGame from "../../img/test/escapeGame.png";
import imgArmWrestling from "../../img/test/armWrestling.png";
import imgFight from "../../img/test/fight.png";
/**
 * Creat html test part
 * @param {String} testName
 * @param String imgName
 * @param {boolean} winner
 * @param {object} hero1
 * @param {object} hero1
 * @returns HTMLElement
 */
export const makeContTestGameVersus = (
  testName = "Course de voiture",
  imgName = "course",
  winner = 0,
  hero1,
  hero2
) => {
  const divTest = createElementWithProps("div", {
    className: "cont-versus-test",
  });

  const titre = createElementWithProps("h2", {
    textContent: testName,
  });

  const divTestCorp = createElementWithProps("h2", {
    className: "cont-versus-test-corp",
  });

  divTestCorp.appendChild(
    makeHerosCard(hero1?.name, hero1?.image?.src, true, winner == 0)
  );

  imgSrc =
    imgName == "escape_game"
      ? imgEscapeGame
      : imgName == "arm_wrestling"
      ? imgArmWrestling
      : imgName == "martial_art"
      ? imgFight
      : null;

  const imgGame = createElementWithProps("img", {
    src: imgSrc,
  });

  divTestCorp.appendChild(imgGame);
  divTestCorp.appendChild(
    makeHerosCard(hero2?.name, hero2?.image?.src, true, winner == 1)
  );

  divTest.appendChild(titre);

  divTest.appendChild(divTestCorp);

  return divTest;
};
