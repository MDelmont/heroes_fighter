import { createHeroesTab } from "./characterPage/heroesTab/main";
import { selectHeroesPart } from "./characterPage/selectHeros";
import { createFormTab } from "./characterPage/formTab";
import { data } from "./datas";
import { MakeHeroesFighterPage } from "./heroesFigherPage/herosFighterPage";
import { MakeVersusPage } from "./versusPage/versusPage";
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
      .catch((err) => {
        console.error("error", err);
      });
  } else if (page == "heroes fighter") MakeHeroesFighterPage();
  else if (page == "versus") MakeVersusPage();

  isMakePage = false;
};
