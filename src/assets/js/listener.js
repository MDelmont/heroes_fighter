import { makeContentMain } from "./main.js";
import { characterImage } from "./datas.js";

export const addEventListenerNav = (navBtn) => {
  navBtn.addEventListener("click", function () {
    let navBtncleans = document.querySelectorAll(".title-page");
    navBtncleans.forEach(function (navBtnclean) {
      navBtnclean.classList.remove("active");
    });
    console.log(navBtn.textContent.toLowerCase());
    navBtn.classList.add("active");

    makeContentMain(navBtn.textContent.toLowerCase());
  });
};


export const eventListenerSelectHereos = (selectHero) => {
  selectHero.addEventListener("change", function () {
    const selectedValue = selectHero.value;
    const selectedIndex = selectHero.selectedIndex;
    const selectedOption = selectHero.options[selectedIndex];
    const img = selectHero.nextSibling;
    const selectedOptionId = selectedOption.id.split("-")[1];
    if (selectedValue != "") {
      characterImage(selectedOptionId)
        .then((urlimg) => {
          img.classList.remove("d-none");
          img.src = urlimg;
        })
        .catch((err) => {
          console.log("pas d'image");
          if (!img.classList.contains("d-none")) {
            img.classList.add("d-none");
          }
        });
    } else {
      img.classList.add("d-none");
    }
  });
};
