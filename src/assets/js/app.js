import { creatNav } from "./nav.js";
import { createHeroesTab } from "./heroesTab.js";

const makePage = () => {
  console.log("makePage");
  const body = document.querySelector("body");

  let nav = creatNav();
  body.appendChild(nav);

  createHeroesTab();
};

const makePageContent = (name) => {};

makePage();
