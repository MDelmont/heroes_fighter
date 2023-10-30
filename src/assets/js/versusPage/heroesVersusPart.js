import { createElementWithProps } from "../utils";
import { gethero1, gethero2 } from "../game.js";
import { makeHerosCard } from "./heroesCard.js";
import { eventListenerButtonResetChoiceHeroes } from "../listeners/eventListenerResetChoiceHeroes";
/**
 * Creat headband versus heroes
 * @returns {HTMLElement}
 */
export const makeHerosVersus = () => {
  const divherosCont = createElementWithProps("div", {
    className: "part-versus-heroes",
  });

  const divHeros = createElementWithProps("div", {
    className: "cont-versus-heroes",
  });

  const hero1 = gethero1();
  const hero2 = gethero2();

  const card1 = makeHerosCard(hero1?.name, hero1?.image?.url);
  const card2 = makeHerosCard(hero2?.name, hero2?.image?.url);

  const versus = createElementWithProps("div", {
    className: "versus",
  });
  const text = createElementWithProps("div", {
    textContent: "VS",
  });

  versus.appendChild(text);

  divHeros.appendChild(card1);
  divHeros.appendChild(versus);
  divHeros.appendChild(card2);

  const divherosCdivbutton = createElementWithProps("div", {
    className: "cont-versus-heroes-button",
  });

  const resetbtn = createElementWithProps("button", {
    innerText: "Reset Heroes",
    className: "red",
    id: "reset-character-btn",
  });

  eventListenerButtonResetChoiceHeroes(resetbtn);

  divherosCdivbutton.append(resetbtn);
  divherosCont.append(divHeros);
  divherosCont.append(divherosCdivbutton);
  return divherosCont;
};
