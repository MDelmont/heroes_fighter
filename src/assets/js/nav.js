import { addEventListenerNav } from "./listener";

export const createNavBar = () => {
  let nav = document.createElement("nav");
  nav.classList.add("navigation");

  const pageTitles = ["Heroes Fighter", "Versus", "Characters"];

  pageTitles.forEach((title) => {
    const navItem = document.createElement("div");
    navItem.classList.add("title-page");

    if (title === "Heroes Fighter") navItem.classList.add("active");

    const navLink = document.createElement("a");
    // navLink.href = `#${title.replace(" ", "_")}`;
    navLink.className = "nav-btn";
    navLink.textContent = title;

    navItem.appendChild(navLink);
    addEventListenerNav(navItem);
    nav.appendChild(navItem);
  });

  document.body.appendChild(nav);
};
