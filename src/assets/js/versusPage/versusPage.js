import { createElementWithProps } from "../utils";
import { makeBandeauCont } from "../bandeau.js";
import { eventListenerButtonStartGameHeroes } from "../listeners/eventListenerStartGameHeroes";
import { makeSelectHeroesPart } from "./selectHeroesPart.js";
import { makeHerosVersus } from "./heroesVersusPart.js";
import { makeContTestGameVersus } from "./heroesTestPart.js";
import { makeContResultAllTest } from "./heroesResultTest.js";
import {
  getStatsgame,
  gethero1,
  gethero2,
  getlistGame,
  gettestResult,
  whoWin,
} from "../game.js";

/**
 * Create and append main content versus
 */
export const MakeVersusPage = () => {
  const main = document.querySelector("#content");

  const stepGame = getStatsgame().stepGame;

  if (stepGame == "init") {
    makeSelectHeroesPart();
  } else if (stepGame == "start") {
    main.appendChild(makeBandeauCont([makeHerosVersus()]));

    const startBtn = createElementWithProps("button", {
      innerText: "Stats Tests",
      className: "green",
      id: "start-game-btn",
    });

    eventListenerButtonStartGameHeroes(startBtn);
    main.appendChild(makeBandeauCont([startBtn]));
  } else if (stepGame == "tests") {
    main.appendChild(makeBandeauCont([makeHerosVersus()]));

    const listGame = getlistGame();
    const testResult = gettestResult();

    var games = Object.keys(listGame);

    games.forEach((game) => {
      main.appendChild(
        makeBandeauCont([
          makeContTestGameVersus(
            listGame[game],
            game,
            testResult[game],
            gethero1(),
            gethero2()
          ),
        ])
      );
    });

    main.appendChild(
      makeBandeauCont([
        makeContResultAllTest(whoWin().name, whoWin().image.url, [
          getStatsgame().scorePlayer1,
          getStatsgame().scorePlayer2,
        ]),
      ])
    );
  }
};
