const body = document.querySelector("body");

let nav = document.createElement("nav");
nav.classList.append("navigation");

pages = ["Heroes fighter", "versus", "characters"];

for (const elem of pages) {
  let p = document.createElement("p");
  p.appendChild(elem);
  nav.appendChild(p);
}

export default nav;
