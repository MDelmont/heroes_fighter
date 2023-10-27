import { createNavBar } from "./nav.js";
import { createContentMain, createMain } from "./main.js";

const makePage = () => {
  createNavBar();
  createMain();
  createContentMain();
};

makePage();
