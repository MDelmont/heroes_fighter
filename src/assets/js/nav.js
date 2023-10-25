export const creatNav = () => {
  let nav = document.createElement("nav");
  nav.classList.add("navigation");

  let pages = ["Heroes fighter", "versus", "characters"];

  for (const elem of pages) {
    let div = document.createElement("div");
    div.classList.add("title-page");
    let a = document.createElement("a");
    a.href = `#${elem.replace(" ", "_")}`;
    a.className = "nav-btn";
    a.textContent = elem;
    div.appendChild(a);
    nav.appendChild(div);
  }
  return nav;
};