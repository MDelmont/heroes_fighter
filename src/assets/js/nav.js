import { addEventListenerToNavigationButton } from "./listeners/eventListenerNav";
import { createElementWithProps } from "./utils";

/**
 * Crée la bar de navigation avec tout les éléments de la pageTitles
 */
export const createNavBar = () => {
  const nav = createElementWithProps("nav", { className: "navigation" });
  const pageTitles = ["Heroes Fighter", "Versus", "Characters"];

  pageTitles.forEach((title) => {
    const navItem = createElementWithProps("div", { className: "title-page" });

    if (title === "Heroes Fighter") navItem.classList.add("active");

    const navLink = createElementWithProps("a", {
      className: "nav-btn",
      textContent: title,
    });
    navItem.appendChild(navLink);
    addEventListenerToNavigationButton(navItem);
    nav.appendChild(navItem);
  });

  document.body.appendChild(nav);
};
