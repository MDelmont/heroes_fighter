import { createHeroesTab } from "./heroesTab/main";
import { selectHeroesPart } from "./selectHeros";
import { createFormTab } from "./formTab";
import { data } from "./datas";
import { MakeheroesFighterPage } from "./herosFighterPage";
import { MakeVersusPage } from "./versusPage";
import { createElementWithProps } from "./utils";

let isMakePage = false;
export const creatMain = (page = "character") => {
  const main = createElementWithProps("main", { id: "content" });
  document.body.appendChild(main);

  makeContentMain();
};

export const makeContentMain = (page = "heroes fighter") => {
  if (!isMakePage) {
    isMakePage = true;

    const main = document.querySelector("#content");
    main.innerHTML = "";

    if (page == "characters") {
      data()
        .then(() => {
          selectHeroesPart();
          createFormTab();
          createHeroesTab();
          isMakePage = false;
        })
        .catch((err) => {
          console.error("error", err);
          isMakePage = false;
        });
    } else if (page == "heroes fighter") {
      MakeheroesFighterPage();
      isMakePage = false;
    } else if (page == "versus") {
      MakeVersusPage();
      isMakePage = false;
    }
  }
};
