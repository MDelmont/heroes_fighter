import { makeBandeauCont } from "./bandeau.js";

export const MakeheroesFighterPage = () => {
  const main = document.querySelector("#content");

  main.appendChild(
    makeBandeauCont("Principe du projet", [
      "Le projet met en avant des heroes de tout milieu ! Le but est de se faire affronté deux heroes sur plusieurs épreuve et de voir le quel gagne ! Amuser vous bien !",
    ])
  );

  main.appendChild(
    makeBandeauCont("Utilisation du site", [
      "Pour se faire affronter les deux héros aller sur la page versus. Et suivez les indications.",
      "Il est également possible de voir tout les personnages dans la page characters. Vous pourrez trier et filter suivant vos envies. Vous pourrez également sélèctionnez deux heros à faire combattre et cliquer sur GO.",
    ])
  );

  main.appendChild(
    makeBandeauCont("Réalisation", [
      "Ce projet à pour but de nous faire monté en compétence sur le javascript avancé. Il nous ai imposer d'utiliser une api, et d'oprimiser le fonctionnement",
      "Nous avont travaillier à deux sur le projet, en mettant en place un gitHub pour géré le versionning",
    ])
  );
};
