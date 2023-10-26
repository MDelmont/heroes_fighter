import { createHeroesTab } from "./heroesTab";
import { selectHeroesPart } from "./select_heros.js";
import { makeFormTab } from "./formTab";
import { data } from "./datas";

export const creatMain = (page = "character") => {
  let main = document.createElement("main");
  main.id = "content";
  document.body.appendChild(main);
  makeContentMain();
};

export const makeContentMain = (page = "characters") => {
  const main = document.querySelector("#content");

  main.innerHTML = "";
  if (page == "characters") {
    data().then( (data) => {
      selectHeroesPart()
      makeFormTab()
      createHeroesTab()
    }
    ).catch( (err) =>{
      console.error('error',err)
    }
      
    )
    
  }
};
