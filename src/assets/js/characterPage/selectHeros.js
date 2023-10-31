import { takeList } from "../datas";
import {eventListenerSelectHeroes} from "../listeners/eventListenerSelectHeroes";
import { eventListenerButtonGoCharacter } from "../listeners/eventListenerGoCharacter";
import { getStatsgame } from "../game";
import { createElementWithProps } from "../utils";

/**
 * Create Select part heroes
 */
export const selectHeroesPart = () => {
  const main = document.querySelector("#content");
  const div = createElementWithProps("div", {
    className: "select-heroes-part",
  });

  const statsGame = getStatsgame();

  const hero1 = statsGame.hero1;
  const id1 = hero1?.id;
  const imgUrl1 = hero1?.image.url;

  const hero2 = statsGame.hero2;
  const id2 = hero2?.id;
  const imgUrl2 = hero2?.image.url;

  let select1 = makeSelectCont(id1, imgUrl1);
  select1.id = "select-heroes-1";
  let versus = document.createElement("div");
  versus.className = "versus";
  let text = document.createElement("p");
  text.textContent = "VS";
  versus.appendChild(text);

  const select2 = makeSelectCont(id2, imgUrl2);
  select2.id = "select-heroes-2";

  const divpersonnage = createElementWithProps("div", {
    className: "Select-heroes-personnage-part",
  });

  divpersonnage.appendChild(select1);
  divpersonnage.appendChild(versus);
  divpersonnage.appendChild(select2);
  div.append(divpersonnage);

  const button = createElementWithProps("button", {
    innerText: "Go",
    className: "btn-standard",
    id: "Versus",
  });

  eventListenerButtonGoCharacter(button);
  div.appendChild(button);

  main.appendChild(div);
};

/**
 *
 * @param {Integer} id
 * @param {String} imgUrl
 * @returns {HTMLDivElement}
 */
const makeSelectCont = (id = null, imgUrl = null) => {
  const div = createElementWithProps("div", {
    className: "select-heroes-cont",
  });
  const select = createElementWithProps("select", {
    className: "select-heroes",
  });

  eventListenerSelectHeroes(select);

  const listOption = takeList("name");
  listOption.forEach((perso) => {
    let name = perso[1];
    const id = perso[0];
    if (perso == "") {
      name = "";
    }
    const option = document.createElement("option");
    option.value = name;
    option.text = name;
    option.id = `option-${id}`;
    select.appendChild(option);
  });

  if (id) select.selectedIndex = id - 1;

  const img = createElementWithProps("img", {
    className: imgUrl ? "img-heroes " : "img-heroes d-none",
    src: imgUrl,
  });

  div.appendChild(select);
  div.appendChild(img);
  return div;
};
