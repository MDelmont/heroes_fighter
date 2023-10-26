import { makeBandeauContVersus } from "./bandeau.js";
import imgCourse from "../img/test/course.png";
import imgBrasDeFer from "../img/test/brasDeFer.png";
import imgCuisiner from "../img/test/cuisiner.png";
export const MakeVersusPage = () => {
  const main = document.querySelector("#content");

  main.appendChild(makeBandeauContVersus(makeButtonVersus("Select Heroes")));
  main.appendChild(makeBandeauContVersus(makeHerosVersus()));
  main.appendChild(
    makeBandeauContVersus(makeButtonVersus("Stats Tests", "green"))
  );

  main.appendChild(
    makeBandeauContVersus(
      makeContTestGameVersus("Course de voiture", "course", 1)
    )
  );
  main.appendChild(
    makeBandeauContVersus(makeContTestGameVersus("Bras de fer", "brasDeFer", 0))
  );
  main.appendChild(
    makeBandeauContVersus(
      makeContTestGameVersus("Préparer à manger", "cuisiner", 0)
    )
  );

  main.appendChild(
    makeBandeauContVersus(
      makeContResultAllTest(
        "Superman",
        "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg",
        [2, 1]
      )
    )
  );
};

const makeButtonVersus = (text, color = "red") => {
  let button = document.createElement("button");
  button.textContent = text;
  button.id = `select-character-btn`;
  button.className = color;
  return button;
};
const makeHerosVersus = () => {
  let divHeros = document.createElement("div");
  divHeros.className = "cont-versus-heroes";

  let card1 = makeHerosCard(
    "Superman",
    "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
  );
  let card2 = makeHerosCard(
    "Batman",
    "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
  );
  let versus = document.createElement("div");

  versus.className = "versus";
  let text = document.createElement("p");
  text.textContent = "VS";
  versus.appendChild(text);

  divHeros.appendChild(card1);
  divHeros.appendChild(versus);
  divHeros.appendChild(card2);
  return divHeros;
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
  imgName == "course" ? (imgGame.src = imgCourse) : null;
  imgName == "brasDeFer" ? (imgGame.src = imgBrasDeFer) : null;
  imgName == "cuisiner" ? (imgGame.src = imgCuisiner) : null;

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
