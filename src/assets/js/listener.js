import { createContentMain } from "./main.js";
import { characterImage, takecharacterByID } from "./datas.js";
import {
  gethero1,
  gethero2,
  sethero1,
  sethero2,
  setstepGame,
  resetGame,
  runGameVersus,
} from "./game.js";

export const addEventListenerNav = (navBtn) => {
  navBtn.addEventListener("click", () => {
    let elements = document.querySelectorAll(".title-page");

    elements.forEach((e) => { e.classList.remove("active") });
    navBtn.classList.add("active");

    createContentMain(navBtn.textContent.toLowerCase());
  });
};

export const eventListenerSelectHeroes = (selectHero) => {
  selectHero.addEventListener("change", () => {
    const { value: selectedValue, selectedIndex, parentElement: { id: parentId }, nextSibling: img } = selectHero;
    const selectedOptionId = selectHero.options[selectedIndex].id.split("-")[1];

    switch (parentId) {
      case "select-heroes-1":
          sethero1(takecharacterByID(selectedOptionId));
          break;
      case "select-heroes-2":
          sethero2(takecharacterByID(selectedOptionId));
          break;
      default:
          break;
    }

    updateImageSource(selectedValue, selectedOptionId, img);

    if (gethero1() && gethero2()) setstepGame("start");
  });
};

const updateImageSource = (selectedValue, selectedOptionId, img) => {
  if (selectedValue === "") return img.classList.add("d-none");

  characterImage(selectedOptionId)
    .then((imgSrc) => {
      img.classList.remove("d-none");
      img.src = imgSrc;    
    })
    .catch((err) => {
      console.error("Pas d'image disponible", err);
      if (!img.classList.contains("d-none")) img.classList.add("d-none");
    });
};

export const eventListenerButtonChooseHeroes = (buttonselectHeroes) => {
  buttonselectHeroes.addEventListener("click", () => {
    const navBtns = document.querySelectorAll(".title-page");

    navBtns.forEach((navBtn) => {
      navBtn.classList.remove("active");
      if (navBtn.textContent == "Characters") navBtn.classList.add("active");

      createContentMain("characters");
    });
  });
};

export const eventListenerButtonGoCharacter = (buttonGoCharacter) => {
  buttonGoCharacter.addEventListener("click", () => {
    if (!(gethero1() && gethero2())) return alert("Renseigner les héros à faire combattre !");;

    setstepGame("start");

    const navBtns = document.querySelectorAll(".title-page");
    navBtns.forEach((navBtn) => {
      navBtn.classList.remove("active");
      if (navBtn.textContent == "Versus") navBtn.classList.add("active");

      createContentMain("versus");
    });
  });
};

export const eventListenerButtonResetChoiceHeroes = (buttonResetHeroes) => {
  buttonResetHeroes.addEventListener("click", () => {
    const navBtns = document.querySelectorAll(".title-page");

    navBtns.forEach((navBtn) => {
      navBtn.classList.remove("active");
      if (navBtn.textContent == "Characters") navBtn.classList.add("active");
      
      resetGame();
      createContentMain("characters");
    });
  });
};

export const eventListenerButtonStartGameHeroes = (buttonStartGameHeroes) => {
  buttonStartGameHeroes.addEventListener("click", () => {
    setstepGame("tests");
    runGameVersus()
    createContentMain("versus");
  });
};
