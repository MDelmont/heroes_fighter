import { updateImageSource, takeCharacterByID } from "../datas";

import {
  getHero1,
  getHero2,
  setHero1,
  setHero2,
  setStepGame,
} from "../game.js";
/**
 * Add listener to button for select heroes
 * @param {HTMLButtonElement} selectHero
 */
export const addEventListenerToHeroSelection = (selectHero) => {
  selectHero.addEventListener("change", () => {
    const {
      value: selectedValue,
      selectedIndex,
      parentElement: { id: parentId },
      nextSibling: img,
    } = selectHero;

    const selectedHeroId = selectHero.options[selectedIndex].id.split("-")[1];

    switch (parentId) {
      case "select-heroes-1":
        setHero1(takeCharacterByID(selectedHeroId));
        break;
      case "select-heroes-2":
        setHero2(takeCharacterByID(selectedHeroId));
        break;
      default:
        break;
    }

    updateImageSource(selectedValue, selectedHeroId, img);

    if (getHero1() && getHero2()) setStepGame("start");
  });
};
