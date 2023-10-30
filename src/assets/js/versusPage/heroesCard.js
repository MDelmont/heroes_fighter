import { createElementWithProps } from "../utils";
/**
 *
 * @param {String} name
 * @param {String} imgurl
 * @param {Boolean} game
 * @param {Boolean} winner
 * @returns HTMLElement
 */
export const makeHerosCard = (name, imgurl, game = false, winner = true) => {
  const heroesCard = createElementWithProps("div", {
    className: "heroes-card",
  });
  const p = createElementWithProps("p", { textContent: name });
  const img = createElementWithProps("img", { src: imgurl });

  heroesCard.appendChild(p);
  heroesCard.appendChild(img);

  if (game)
    heroesCard.append(
      createElementWithProps("p", {
        textContent: winner ? "Winner" : "Looser",
        className: `result-game ${winner ? "Winner" : "Looser"}`,
      })
    );

  return heroesCard;
};
