import { createElementWithProps } from "../utils";
/**
 * Creat html elements
 * @param {String} winnerName
 * @param {String} urlImg
 * @param {Integer} score
 * @returns {HTMLElement}
 */
export const makeContResultAllTest = (winnerName, urlImg, score) => {
  const divContReslut = createElementWithProps("div", {
    className: "cont-result-versus",
  });

  const titre = createElementWithProps("h2", {
    textContent: `Winner is ${winnerName}`,
  });

  const img = createElementWithProps("img", {
    src: urlImg,
  });

  const result = createElementWithProps("p", {
    textContent: `${score[0]} - ${score[1]}`,
    className: "result-all-game",
  });

  divContReslut.appendChild(titre);
  divContReslut.appendChild(img);
  divContReslut.appendChild(result);

  return divContReslut;
};
