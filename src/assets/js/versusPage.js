import { makeBandeauContVersus } from "./bandeau.js";
import imgEscapeGame from "../img/test/escapeGame.png";
import imgArmWrestling from "../img/test/armWrestling.png";
import imgFight from "../img/test/fight.png";
import {
  getStatsgame,
  gethero1,
  gethero2,
  getlistGame,
  gettestResult,
  whoWin,
} from "./game.js";
import {
  eventListenerButtonChooseHeroes,
  eventListenerButtonResetChoiceHeroes,
  eventListenerButtonStartGameHeroes,
} from "./listener";

export const MakeVersusPage = () => {
  const main = document.querySelector("#content");

  let buttonSelectHeroes = makeButtonVersus("Select Heroes");
  eventListenerButtonChooseHeroes(buttonSelectHeroes);
  getStatsgame().stepGame == "init"
    ? main.appendChild(makeBandeauContVersus(buttonSelectHeroes))
    : null;
  let startBtn = makeButtonVersus("Stats Tests", "green", "start-game-btn");
  eventListenerButtonStartGameHeroes(startBtn);
  getStatsgame().stepGame == "start"
    ? main.appendChild(makeBandeauContVersus(makeHerosVersus())) &
      main.appendChild(makeBandeauContVersus(startBtn))
    : null;

  if (getStatsgame().stepGame == "tests") {
    main.appendChild(makeBandeauContVersus(makeHerosVersus()));
    let listGame = getlistGame();
    let testResult = gettestResult();
    // Obtenez les clés de l'objet
    var keys = Object.keys(listGame);
    keys.forEach((key) => {
      main.appendChild(
        makeBandeauContVersus(
          makeContTestGameVersus(listGame[key], key, testResult[key], [
            [gethero1().name, gethero1().image.url],
            [gethero2().name, gethero2().image.url],
          ])
        )
      );
    });

    main.appendChild(
      makeBandeauContVersus(
        makeContResultAllTest(whoWin().name, whoWin().image.url, [
          getStatsgame().scorePlayer1,
          getStatsgame().scorePlayer2,
        ])
      )
    );
  }
};

const makeButtonVersus = (
  text,
  color = "red",
  idName = "select-character-btn"
) => {
  let button = document.createElement("button");
  button.textContent = text;

  button.id = idName;

  button.className = color;
  return button;
};
const makeHerosVersus = () => {
  let divherosCont = document.createElement("div");
  divherosCont.className = "part-versus-heroes";
  let divHeros = document.createElement("div");
  divHeros.className = "cont-versus-heroes";
  let hero1 = gethero1();
  let hero2 = gethero2();

  let card1 = makeHerosCard(hero1?.name, hero1?.image?.url);
  let card2 = makeHerosCard(hero2?.name, hero2?.image?.url);
  let versus = document.createElement("div");

  versus.className = "versus";
  let text = document.createElement("p");
  text.textContent = "VS";
  versus.appendChild(text);

  divHeros.appendChild(card1);
  divHeros.appendChild(versus);
  divHeros.appendChild(card2);

  let divherosCdivbutton = document.createElement("div");
  divherosCdivbutton.className = "cont-versus-heroes-button";
  let resetbtn = makeButtonVersus(
    "Reset Heroes",
    "blue",
    "reset-character-btn"
  );
  eventListenerButtonResetChoiceHeroes(resetbtn);
  divherosCdivbutton.append(resetbtn);

  divherosCont.append(divHeros);
  divherosCont.append(divherosCdivbutton);
  return divherosCont;
};

const makeHerosCard = (name, imgurl, game = false, winner = true) => {
  let heroesCard = document.createElement("div");
  heroesCard.className = "heroes-card";
  let p = document.createElement("p");
  p.textContent = name;
  let img = document.createElement("img");
  img.src = imgurl;
  heroesCard.appendChild(p);
  heroesCard.appendChild(img);
  if (game) {
    let p2 = document.createElement("p");
    let result = winner ? "Winner" : "Looser";
    p2.textContent = result;
    p2.className = `result-game ${result}`;
    heroesCard.append(p2);
  }
  return heroesCard;
};

const makeContTestGameVersus = (
  testName = "Course de voiture",
  imgName = "course",
  winner = 0,
  heroes = [
    [
      "Superman",
      "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg",
    ],
    [
      "Batman",
      "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
    ],
  ]
) => {
  let divTest = document.createElement("div");
  divTest.className = "cont-versus-test";

  let titre = document.createElement("h2");
  titre.textContent = testName;

  let divTestCorp = document.createElement("div");
  divTestCorp.className = "cont-versus-test-corp";

  divTestCorp.appendChild(
    makeHerosCard(heroes[0][0], heroes[0][1], true, winner == 0)
  );

  let imgGame = document.createElement("img");
  imgName == "escape_game" ? (imgGame.src = imgEscapeGame) : null;
  imgName == "arm_wrestling" ? (imgGame.src = imgArmWrestling) : null;
  imgName == "martial_art" ? (imgGame.src = imgFight) : null;

  divTestCorp.appendChild(imgGame);
  divTestCorp.appendChild(
    makeHerosCard(heroes[1][0], heroes[1][1], true, winner == 1)
  );
  divTest.appendChild(titre);
  divTest.appendChild(divTestCorp);
  return divTest;
};

const makeContResultAllTest = (winnerName, urlImg, score) => {
  let divContReslut = document.createElement("div");
  divContReslut.className = "cont-result-versus";

  let titre = document.createElement("h2");
  titre.textContent = `Winner is ${winnerName}`;

  let img = document.createElement("img");
  img.src = urlImg;

  let result = document.createElement("p");
  result.textContent = `${score[0]} - ${score[1]}`;
  result.className = `result-all-game`;
  divContReslut.appendChild(titre);
  divContReslut.appendChild(img);
  divContReslut.appendChild(result);

  return divContReslut;
};
