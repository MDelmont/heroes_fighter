import { creatNav } from "./nav.js";
import { createHeroesTab } from "./heroesTab";
import { selectHeroesPart } from "./select_heros.js";

let main = document.createElement("main");


const makePage = () => {
  console.log("makePage");
  const body = document.querySelector("body");

  let nav = creatNav();
  body.appendChild(nav);

  let heroesTab = createHeroesTab();
  body.appendChild(makePageContent("character"));
};

const makePageContent = (name) => {

  if (name == "character") {
    main.appendChild(selectHeroesPart());
  }

  return main;
};



makePage();
