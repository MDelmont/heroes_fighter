import { makeContentMain } from "./main.js";
import { characterImage, takecharacterByID } from "./datas.js";
import { getheroes1, getheroes2,setheroes1 ,setheroes2} from "./game.js";

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
      console.log(getheroes1())
      setheroes1(takecharacterByID(selectedOptionId));
      console.log(getheroes1())
    } else if (parentid === "select-heroes-2") {
      console.log(getheroes2())
      setheroes2(takecharacterByID(selectedOptionId));
      console.log(getheroes2())
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
  });
};

export const eventListenerbuttonchoiseHeroes = (buttonselectHeroes) => {
  buttonselectHeroes.addEventListener("click", function () {
    let navBtncleans = document.querySelectorAll(".title-page");
    console.log(navBtncleans);
    navBtncleans.forEach(function (navBtnclean) {
      navBtnclean.classList.remove("active");
      if (navBtnclean.textContent == "Characters") {
        navBtnclean.classList.add("active");
      }
      makeContentMain("characters");
    });
  });
};
