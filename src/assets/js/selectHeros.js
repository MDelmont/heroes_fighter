import { makeButton } from "./button";
import { takeList } from "./datas";
import { eventListenerSelectHereos } from "./listener";

export const selectHeroesPart = () => {
  const main = document.querySelector("#content");
  let divCont = document.createElement("div");
  divCont.className = "Select-heroes-part";
  let select1 = makeSelectCont();
  select1.id = "select-heroes-1";
  let versus = document.createElement("div");
  versus.className = "versus";
  let text = document.createElement("p");
  text.textContent = "VS";
  versus.appendChild(text);
  let select2 = makeSelectCont();
  select2.id = "select-heroes-2";
  divCont.appendChild(select1);
  divCont.appendChild(versus);
  divCont.appendChild(select2);
  divCont.appendChild(makeButton("Versus", "btn-standard", "Go"));
  main.appendChild(divCont);
};

const makeSelectCont = () => {
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
  let img = document.createElement("img");
  img.className = "img-heroes d-none";
  div.appendChild(select);
  div.appendChild(img);
  return div;
};
