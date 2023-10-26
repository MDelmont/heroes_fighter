import { makeContentMain } from "./main.js";
import { characterImage } from "./datas.js";
import imgTransp from "../img/Transparent.psd";

// Sélectionnez tous les éléments ayant une certaine classe CSS
const navBtns = document.querySelectorAll(".title-page"); // Remplacez 'maClasse' par la classe que vous ciblez

// Parcourez les éléments et ajoutez un gestionnaire d'événements à chacun
navBtns.forEach(function (navBtn) {
  navBtn.addEventListener("click", function () {
    let navBtncleans = document.querySelectorAll(".title-page");
    navBtncleans.forEach(function (navBtnclean) {
      navBtnclean.classList.remove("active");
    });

    navBtn.classList.add("active");
    makeContentMain(navBtn.textContent);
  });
});

export const eventListenerSelectHereos = (selectHero) => {
  console.log(selectHero);

  selectHero.addEventListener("change", function () {
    const selectedValue = selectHero.value;
    const selectedIndex = selectHero.selectedIndex;
    const selectedOption = selectHero.options[selectedIndex];
    const img = selectHero.nextSibling;
    const selectedOptionId = selectedOption.id.split("-")[1];
    if (selectedValue != "") {
      characterImage(selectedOptionId).then((urlimg) => {
        img.classList.remove("d-none");
        img.src = urlimg;
      });
    } else {
      img.classList.add("d-none");
    }
  });
};
