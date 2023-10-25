import { creatNav } from "./nav.js";

const makePage = () => {
  console.log("makePage");
  const body = document.querySelector("body");
  let nav = creatNav();
  body.appendChild(nav);
};

const makePageContent = (name) => {};

makePage();
