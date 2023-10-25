import { creatNav } from "./nav.js";
import { creatMain } from "./main.js";


const makePage = () => {
  console.log("makePage");

  creatNav();
  creatMain();

};

makePage();
