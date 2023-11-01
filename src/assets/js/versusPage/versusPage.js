import { createElementWithProps } from "../utils";
import { makeBandeauCont } from "../bandeau.js";
import { eventListenerButtonStartGameHeroes } from "../listeners/eventListenerStartGameHeroes";
import { makeSelectHeroesPart } from "./selectHeroesPart.js";
import { makeHerosVersus } from "./heroesVersusPart.js";
import { makeContTestGameVersus } from "./heroesTestPart.js";
import { makeContResultAllTest } from "./heroesResultTest.js";
import {
  getStatsgame,
  getHero1,
  getHero2,
  getGameList,
  gettestResult,
  whoWin,
} from "../game.js";

/**
 * Crée et ajoute le contenu principal pour la page de confrontation entre héros.
 * La structure du contenu change en fonction de l'étape actuelle du jeu.
 *
 * @returns {void} Ne retourne rien car elle modifie directement le contenu de la page.
 */
export const MakeVersusPage = () => {
  const mainContainer = document.querySelector("#content");
  const stepGame = getStatsgame().stepGame;

  mainContainer.innerHTML = '';

  if (stepGame == "init") {
    makeSelectHeroesPart();
  } 
  
  else if (stepGame == "start") {
    const startGameButton = createElementWithProps("button", { innerText: "Stats Tests", className: "green", id: "start-game-btn" });

    eventListenerButtonStartGameHeroes(startGameButton);

    mainContainer.appendChild(makeBandeauCont([makeHerosVersus()]));
    mainContainer.appendChild(makeBandeauCont([startGameButton]));
  }
  
  else if (stepGame == "tests") {
    mainContainer.appendChild(makeBandeauCont([makeHerosVersus()]));

    const gameList = getGameList();
    const testResults = gettestResult();

    Object.entries(gameList).forEach(([gameKey, gameName]) => {
      mainContainer.appendChild(
        makeBandeauCont([
          makeContTestGameVersus(
            gameName,
            gameKey,
            testResults[gameKey],
            getHero1(),
            getHero2()
          ),
        ])
      );
    });

    const winner = whoWin();
    mainContainer.appendChild(
      makeBandeauCont([
        makeContResultAllTest(
          winner.name,
          winner.image.url,
          [getStatsgame().scorePlayer1, getStatsgame().scorePlayer2]
        ),
      ])
    );
  }
};
