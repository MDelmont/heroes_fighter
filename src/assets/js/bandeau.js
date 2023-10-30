/**
 * Crée un élément div avec un bandeau rouge.
 * @param {Liste} components - Une liste de composants.
 * @returns {HTMLDivElement}
 */
export const makeBandeauCont = (components) => {
  // Crée le div parent
  const contBandeau = document.createElement("div");
  contBandeau.className = "cont-bandeau versus-bandeau";

  const sens = ["plus", "moins"];
  const numbers = ["un", "deux", "trois"];

  // Sélection aléatoire d'un élément dans le tableau "sens"
  const sensAleatoire = sens[Math.floor(Math.random() * sens.length)];

  // Sélection aléatoire d'un élément dans le tableau "numbers"
  const nombreAleatoire = numbers[Math.floor(Math.random() * numbers.length)];

  // Crée le div "bar rouge"
  const barBandeau = document.createElement("div");
  barBandeau.className = `bar-bandeau ${sensAleatoire} ${nombreAleatoire}`;

  // Crée le div "cont-info"
  const contInfo = document.createElement("div");
  contInfo.className = "cont-info";

  // Ajoute chaque composant de la liste à "cont-info"
  components.forEach((component) => {
    contInfo.appendChild(component);
  });

  // Ajoute "bar-bandeau" et "cont-info" à "cont-bandeau"
  contBandeau.appendChild(barBandeau);
  contBandeau.appendChild(contInfo);

  return contBandeau;
};
