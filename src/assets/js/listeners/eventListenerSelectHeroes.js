import { updateImageSource, takecharacterByID } from "../datas";

import {
  gethero1,
  gethero2,
  sethero1,
  sethero2,
  setstepGame,
} from "../game.js";
/**
 * Add listener to button for select heroes
 * @param {HTMLButtonElement} selectHero
 */
export const eventListenerSelectHeroes = (selectHero) => {
  selectHero.addEventListener("change", () => {
    const {
      value: selectedValue,
      selectedIndex,
      parentElement: { id: parentId },
      nextSibling: img,
    } = selectHero;

    const selectedOptionId = selectHero.options[selectedIndex].id.split("-")[1];

    switch (parentId) {
      case "select-heroes-1":
        sethero1(takecharacterByID(selectedOptionId ));
        break;
      case "select-heroes-2":
        sethero2(takecharacterByID(selectedOptionId ));
        break;
      default:
        break;
    }

    updateImageSource(selectedValue, selectedOptionId, img);

    if (gethero1() && gethero2()) setstepGame("start");
  });
};
