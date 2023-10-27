import { makeContentMain } from "./main.js";
import { characterImage, takecharacterByID } from "./datas.js";
import {
  getheroes1,
  getheroes2,
  setheroes1,
  setheroes2,
  setstepGame,
  resetGame,
  runGameVersus,
} from "./game.js";

export const addEventListenerNav = (navBtn) => {
  navBtn.addEventListener("click", function () {
    let navBtncleans = document.querySelectorAll(".title-page");
    navBtncleans.forEach(function (navBtnclean) {
      navBtnclean.classList.remove("active");
    });
    navBtn.classList.add("active");

    makeContentMain(navBtn.textContent.toLowerCase());
  });
};

export const eventListenerSelectHereos = (selectHero) => {
  selectHero.addEventListener("change", function () {
    const selectedValue = selectHero.value;
    const selectedIndex = selectHero.selectedIndex;
    const selectedOption = selectHero.options[selectedIndex];
    const parentid = selectHero.parentElement.id;
    const img = selectHero.nextSibling;
    const selectedOptionId = selectedOption.id.split("-")[1];

    if (parentid === "select-heroes-1") {
      setheroes1(takecharacterByID(selectedOptionId));
    } else if (parentid === "select-heroes-2") {
      setheroes2(takecharacterByID(selectedOptionId));
    }
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

    if (getheroes1() && getheroes2()) {
      setstepGame("start");
    }
  });
};

export const eventListenerbuttonchoiseHeroes = (buttonselectHeroes) => {
  buttonselectHeroes.addEventListener("click", function () {
    let navBtncleans = document.querySelectorAll(".title-page");
    navBtncleans.forEach(function (navBtnclean) {
      navBtnclean.classList.remove("active");
      if (navBtnclean.textContent == "Characters") {
        navBtnclean.classList.add("active");
      }
      makeContentMain("characters");
    });
  });
};

export const eventListenerbuttonGocharacter = (buttonGocharacter) => {
  buttonGocharacter.addEventListener("click", function () {
    let navBtncleans = document.querySelectorAll(".title-page");

    if (getheroes1() && getheroes2()) {
      setstepGame("start");
      let navBtncleans = document.querySelectorAll(".title-page");
      navBtncleans.forEach(function (navBtnclean) {
        navBtnclean.classList.remove("active");
        if (navBtnclean.textContent == "Versus") {
          navBtnclean.classList.add("active");
        }
        makeContentMain("versus");
      });
    } else {
      alert("Renseigner les héros !");
    }
  });
};

export const eventListenerbuttonresetchoiseHeroes = (buttonresetHeroes) => {
  buttonresetHeroes.addEventListener("click", function () {
    let navBtncleans = document.querySelectorAll(".title-page");
    navBtncleans.forEach(function (navBtnclean) {
      navBtnclean.classList.remove("active");
      if (navBtnclean.textContent == "Characters") {
        navBtnclean.classList.add("active");
      }
      resetGame();
      makeContentMain("characters");
    });
  });
};
export const eventListenerbuttonstartGameHeroes = (buttonstartGameHeroes) => {
  buttonstartGameHeroes.addEventListener("click", function () {
   
    setstepGame("tests");
    runGameVersus()
    makeContentMain("versus");
  
    
  });
};
