import { makeBandeauCont } from "../bandeau.js";

/**
 * Construct pages Heroes figher content
 */
export const MakeHeroesFighterPage = () => {
  //data for content
  const contentOfPage = [
    [
      "Principe du projet",
      [
        "Le projet met en avant des heroes de tout milieu ! Le but est de se faire affronté deux heroes sur plusieurs épreuve et de voir le quel gagne ! Amuser vous bien !",
      ],
    ],
    [
      "Utilisation du site",
      [
        "Pour se faire affronter les deux héros aller sur la page versus. Et suivez les indications.",
        "Il est également possible de voir tout les personnages dans la page characters. Vous pourrez trier et filter suivant vos envies. Vous pourrez également sélèctionnez deux heros à faire combattre et cliquer sur GO.",
      ],
    ],
    [
      "Réalisation",
      [
        "Ce projet à pour but de nous faire monté en compétence sur le javascript avancé. Il nous ai imposer d'utiliser une api, et d'oprimiser le fonctionnement",
        "Nous avont travaillier à deux sur le projet, en mettant en place un gitHub pour géré le versionning",
      ],
    ],
  ];

  const main = document.querySelector("#content");

  //add content to main
  contentOfPage.forEach((content) => {
    const partcontent = makeBandeauCont(
      makeContentTitleParagraph(content[0], content[1])
    );
    main.appendChild(partcontent);
  });
};

/**
 *
 * @param {String} title
 * @param {List of String} Paragraphe
 * @returns
 */
const makeContentTitleParagraph = (title, Paragraphs) => {
  let listElement = [];
  // Crée le titre et le paragraphe dans "cont-info"
  const titre = document.createElement("h2");
  listElement.push(titre);
  titre.textContent = title;

  Paragraphs.forEach((Paragraph) => {
    const parahraphContent = document.createElement("p");
    parahraphContent.textContent = Paragraph;
    listElement.push(parahraphContent);
  });

  return listElement;
};
