import { creatNav } from "./nav.js";
import { createHeroesTab } from "./heroesTab";
import { selectHeroesPart } from "./select_heros.js";
import { creatMain } from "./main.js";

const makePage = () => {
  console.log("makePage");

  creatNav();
  creatMain();
};

makePage();
