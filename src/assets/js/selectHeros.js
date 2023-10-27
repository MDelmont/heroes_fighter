import { makeButton } from "./button";
import { takeList } from "./datas";
import { eventListenerSelectHereos } from "./listener";
import { getStatsgame } from "./game";

export const selectHeroesPart = () => {
  let statsGame = getStatsgame();

  const main = document.querySelector("#content");
  let divCont = document.createElement("div");
  let id1 = statsGame?.heroes1?.id;
  let imgUrl1 = statsGame?.heroes1?.image?.url;
  divCont.className = "Select-heroes-part";
  let select1 = makeSelectCont(id1, imgUrl1);
  select1.id = "select-heroes-1";
  let versus = document.createElement("div");
  versus.className = "versus";
  let text = document.createElement("p");
  text.textContent = "VS";
  versus.appendChild(text);
  let id2 = statsGame?.heroes2?.id;
  let imgUrl2 = statsGame?.heroes2?.image?.url;
  let select2 = makeSelectCont(id2, imgUrl2);
  select2.id = "select-heroes-2";

  let divpersonnage = document.createElement("div");
  divpersonnage.className = "Select-heroes-personnage-part";
  divpersonnage.appendChild(select1);
  divpersonnage.appendChild(versus);
  divpersonnage.appendChild(select2);
  divCont.append(divpersonnage);
  divCont.appendChild(makeButton("Versus", "btn-standard", "Go"));

  main.appendChild(divCont);
};

const makeSelectCont = (id = null, imgUrl = null) => {
  let div = document.createElement("div");
  div.className = "Select-heroes-cont";
  let select = document.createElement("select");
  select.className = "select-heroes";
  eventListenerSelectHereos(select);

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
  let img = document.createElement("img");
  img.className = "img-heroes d-none";
  imgUrl ? (img.src = imgUrl) : null;

  div.appendChild(select);
  div.appendChild(img);
  return div;
};
