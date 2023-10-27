import { createHeroesTab } from "./heroesTab/main";
import { selectHeroesPart } from "./selectHeros";
import { createFormTab } from "./formTab";
import { data } from "./datas";
import { MakeheroesFighterPage } from "./herosFighterPage";
import { MakeVersusPage } from "./versusPage";
import { createElementWithProps } from "./utils";

let isMakePage = false;

export const createMain = () => {
  const main = createElementWithProps("main", { id: "content" });
  document.body.appendChild(main);
};

export const createContentMain = (page = "heroes fighter") => {
  if (isMakePage) return;

  isMakePage = true;

  const main = document.querySelector("#content");
  main.innerHTML = "";

  if (page == "characters") {
    data()
      .then(() => {
        selectHeroesPart();
        createFormTab();
        createHeroesTab();
      })
      .catch((err) => { console.error("error", err) });
  }
  else if (page == "heroes fighter") MakeheroesFighterPage();
  else if (page == "versus") MakeVersusPage();

  isMakePage = false;
};
