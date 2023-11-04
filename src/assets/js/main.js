import { createHeroesTab } from "./characterPage/heroesTab/main";
import { selectHeroesPart } from "./characterPage/selectHeros";
import { createFormTab } from "./characterPage/formTab";
import { data } from "./datas";
import { MakeHeroesFighterPage } from "./heroesFigherPage/herosFighterPage";
import { MakeVersusPage } from "./versusPage/versusPage";
import { createElementWithProps } from "./utils";

let isMakePage = false;

/**
 * Créer le main qui contiendra le contenu des pages de l'application.
 */
export const createMain = () => {
  const main = createElementWithProps("main", { id: "content" });
  document.body.appendChild(main);
};

/**
 * Permet de généré le contenu de main,
 * Le contenu est choisi en fonction du nom de la page.
 * @param {String} page
 * @returns
 */
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
