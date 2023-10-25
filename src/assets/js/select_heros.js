import { makeButton } from "./button";
export const selectHeroesPart = () => {
  let divCont = document.createElement("div");

  divCont.className = "Select-heroes-part";

  let select1 = makeSelectCont();
  let versus = document.createElement("div");
  versus.className = "versus";
  let text = document.createElement("p");
  text.textContent = "VS";
  versus.appendChild(text);
  let select2 = makeSelectCont();
  divCont.appendChild(select1);
  divCont.appendChild(versus);
  divCont.appendChild(select2);
  divCont.appendChild(makeButton("Versus", "btn-standard", "Go"));

  return divCont;
};

const makeSelectCont = () => {
  let div = document.createElement("div");
  div.className = "Select-heroes-cont";

  let select = document.createElement("select");
  select.className = "select-heroes";
  let img = document.createElement("img");
  img.className = "img-heroes";

  div.appendChild(select);
  div.appendChild(img);

  return div;
};
