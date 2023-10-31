import { createNavBar } from "./nav.js";
import { createContentMain, createMain } from "./main.js";


/**
 * Create page
 */
const makePage = () => {
  createNavBar();
  createMain();
  createContentMain();
};

makePage();
