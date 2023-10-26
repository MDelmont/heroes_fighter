import { takeList } from "./datas";

export const makeFormTab = () => {
  const main = document.querySelector("#content");
  let divCont = document.createElement("div");

  divCont.className = "form-tab-part";

  let input = document.createElement("input");
  input.placeholder = "Chercher un nom";
  input.id = "inpt-filter-name";
  divCont.appendChild(input);
  let select1 = makeSelectCont("Éditeur", "select-editeur");
  let select2 = makeSelectCont("Race", "select-race");

  divCont.appendChild(select1);
  divCont.appendChild(select2);

  main.appendChild(divCont);
};

const makeSelectCont = (name, id) => {
  let div = document.createElement("div");
  div.className = "Select-form-Tab";

  let label = document.createElement("label");
  label.textContent = name;
  label.setAttribute("for", id);

  let select = document.createElement("select");
  select.className = `select-tab`;
  select.id = id;
  const options = takeList(id.split("-")[1]);
  options.forEach((optionValue) => {
    let option = document.createElement("option");
    option.value = optionValue;
    option.text = optionValue;
    select.appendChild(option);
  });

  div.appendChild(label);
  div.appendChild(select);

  return div;
};
