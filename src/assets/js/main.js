import { createHeroesTab } from "./heroesTab/main";
import { selectHeroesPart } from "./selectHeros";
import { createFormTab } from "./formTab";
import { data } from "./datas";

export const creatMain = (page = "character") => {
  let main = document.createElement("main");
  main.id = "content";
  document.body.appendChild(main);
  makeContentMain();
};

export const makeContentMain = (page = "characters") => {
  const main = document.querySelector("#content");
  main.innerHTML = "";

  if (page == "characters") {
    data()
      .then(() => {
        selectHeroesPart();
        createFormTab();
        createHeroesTab();
      })
      .catch((err) => {
        console.error("error", err);
      });
  }
};
