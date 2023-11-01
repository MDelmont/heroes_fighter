import { createElementWithProps } from "../utils";
import { getHero1, getHero2 } from "../game.js";
import { makeHerosCard } from "./heroesCard.js";
import { addEventListenerToResetChoiceHeroesButton } from "../listeners/eventListenerResetChoiceHeroes";

/**
 * Crée un bandeau affichant deux héros face à face avec un bouton de réinitialisation.
 * Ce composant est utilisé pour présenter les cartes des héros et un signe "VS" entre eux.
 * Il inclut également un bouton de réinitialisation pour recommencer le choix des héros.
 *
 * @returns {HTMLElement} L'élément HTML contenant la mise en page de confrontation avec les cartes des héros et le bouton de réinitialisation.
 */
export const makeHerosVersus = () => {
  const divContainer = createElementWithProps("div", { className: "part-versus-heroes" });
  const divHeros = createElementWithProps("div", { className: "cont-versus-heroes" });

  const hero1 = getHero1();
  const hero2 = getHero2();

  const heroCard1 = makeHerosCard(hero1?.name, hero1?.image?.url);
  const heroCard2 = makeHerosCard(hero2?.name, hero2?.image?.url);

  const versusSign = createElementWithProps("div", { className: "versus" });
  const versusText = createElementWithProps("p", { textContent: "VS" });

  versusSign.appendChild(versusText);

  divHeros.appendChild(heroCard1);
  divHeros.appendChild(versusSign);
  divHeros.appendChild(heroCard2);

  const buttonContainer = createElementWithProps("div", { className: "cont-versus-heroes-button" });

  const resetButton = createElementWithProps("button", { innerText: "Reset Heroes", className: "blue", id: "reset-character-btn" });

  addEventListenerToResetChoiceHeroesButton(resetButton);

  buttonContainer.append(resetButton);
  divContainer.append(divHeros);
  divContainer.append(buttonContainer);

  return divContainer;
};
