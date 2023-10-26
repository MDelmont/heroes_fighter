import { createHeroesTab } from "./heroesTab/main";
import { selectHeroesPart } from "./selectHeros";
import { makeFormTab } from "./formTab";
import { data } from "./datas";
import{MakeheroesFighterPage} from "./herosFighterPage";

export const creatMain = (page = "character") => {
  let main = document.createElement("main");
  main.id = "content";
  document.body.appendChild(main);
  makeContentMain();
};

export const makeContentMain = (page = "heroes fighter") => {
  const main = document.querySelector("#content");
  main.innerHTML = "";

  if (page == "characters") {
    data()
      .then(() => {
        selectHeroesPart();
        makeFormTab();
        createHeroesTab();
      })
      .catch((err) => {
        console.error("error", err);
      });
  } else if (page=='heroes fighter'){

    MakeheroesFighterPage()
    
  }
};
