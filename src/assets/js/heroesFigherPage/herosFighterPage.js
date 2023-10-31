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
        "Le projet met en avant des héros de tous milieux ! Le but est de les faire s'affronter dans plusieurs épreuves et de voir lequel gagne ! Amusez-vous bien !",
      ],
    ],
    [
      "Utilisation du site",
      [
        "Pour faire affronter les deux héros, allez sur la page 'Versus' et suivez les indications.",
        "Il est également possible de voir tous les personnages sur la page 'Characters'. Vous pourrez les trier et les filtrer selon vos préférences. Vous pourrez également sélectionner deux héros à faire combattre et cliquer sur 'GO'.",
      ],
    ],
    [
      "Réalisation",
      [
        "Nous avons travaillé à deux sur le projet.",
        "Ce projet a pour but de nous faire monter en compétence sur le JavaScript avancé.",
        "Pour les données nous utilisons un api. Pour la gestion du versionning nous utilisons gitHub.",
      ],
    ],
    [
      "Contact",
      [
        " <a target='_blank' href='https://www.linkedin.com/in/benjamin-guillemin-57704624b/'>Benjamin Guillemin</a> et <a target='_blank' href='https://www.linkedin.com/in/matthieu-delmont/'>Matthieu Delmont</a>",
        " <a href='https://github.com/MDelmont/heroes_fighter' target='_blank'>GitHub</a> : <a href='https://github.com/MDelmont/heroes_fighter' target='_blank'>https://github.com/MDelmont/heroes_fighter</a>",
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
    parahraphContent.innerHTML = Paragraph;
    listElement.push(parahraphContent);
  });

  return listElement;
};
