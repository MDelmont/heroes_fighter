import { createHeroesTab } from "./heroesTab";
import { selectHeroesPart } from "./select_heros.js";

export const creatMain = (page = "character") => {
  let main = document.createElement("main");
  main.id = "content";
  document.body.appendChild(main);
  makeContentMain();
};

const makeContentMain = (page = "character") => {
  const main = document.querySelector(".content");

  if (page == "character") {
    selectHeroesPart();
    createHeroesTab();
  }
};
