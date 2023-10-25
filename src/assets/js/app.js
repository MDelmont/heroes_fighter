import { creatNav } from "./nav.js";
import { createHeroesTab } from "./heroesTab";

const makePage = () => {
  console.log("makePage");
  const body = document.querySelector("body");

  let nav = creatNav();
  body.appendChild(nav);

  let heroesTab = createHeroesTab();
  body.appendChild(heroesTab);
};

const makePageContent = (name) => {};

makePage();
