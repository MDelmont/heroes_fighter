import { makeButton } from "../button";
import { takeList } from "../datas";
import { eventListenerSelectHeroes } from "../listeners/eventListenerSelectHeroes";
import { eventListenerButtonGoCharacter } from "../listeners/eventListenerGoCharacter";
import { getStatsgame } from "../game";
import { createElementWithProps } from "../utils";

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
  let select2 = makeSelectCont(id2, imgUrl2);
  select2.id = "select-heroes-2";

  let divpersonnage = document.createElement("div");
  divpersonnage.className = "Select-heroes-personnage-part";
  divpersonnage.appendChild(select1);
  divpersonnage.appendChild(versus);
  divpersonnage.appendChild(select2);
  div.append(divpersonnage);
  let button = makeButton("Versus", "btn-standard", "Go");
  eventListenerButtonGoCharacter(button);
  div.appendChild(button);

  main.appendChild(div);
};

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
    let id = perso[0];
    if (perso == "") {
      name = "";
    }
    let option = document.createElement("option");
    option.value = name;
    option.text = name;
    option.id = `option-${id}`;
    select.appendChild(option);
  });

  id ? (select.selectedIndex = id - 1) : null;
  id ?? (select.selectedIndex = id - 1);

  if (id) select.selectedIndex = id - 1;

  let img = document.createElement("img");
  imgUrl
    ? (img.className = "img-heroes ")
    : (img.className = "img-heroes d-none");
  img.src = imgUrl;

  div.appendChild(select);
  div.appendChild(img);
  return div;
};
