export const makeBandeauCont = (titreText, texts) => {
  // Crée le div parent "cont-bandeau"
  const contBandeau = document.createElement("div");
  contBandeau.className = "cont-bandeau";

  const sens = ["plus", "moins"];
  const numbers = ["un", "deux", "trois"];

  // Sélection aléatoire d'un élément dans le tableau sens
  const sensAleatoire = sens[Math.floor(Math.random() * sens.length)];

  // Sélection aléatoire d'un élément dans le tableau numbers
  const nombreAleatoire = numbers[Math.floor(Math.random() * numbers.length)];

  // Crée le div "bar-bandeau"
  const barBandeau = document.createElement("div");
  barBandeau.className = `bar-bandeau ${sensAleatoire} ${nombreAleatoire}`;

  // Crée le div "cont-info"
  const contInfo = document.createElement("div");
  contInfo.className = "cont-info";

  // Crée le titre et le paragraphe dans "cont-info"
  const titre = document.createElement("h2");
  contInfo.appendChild(titre);
  titre.textContent = titreText;

  texts.forEach((text) => {
    const paragraphe = document.createElement("p");
    paragraphe.textContent = text;
    contInfo.appendChild(paragraphe);
  });

  // Ajoute "bar-bandeau" et "cont-info" à "cont-bandeau"
  contBandeau.appendChild(barBandeau);
  contBandeau.appendChild(contInfo);
  return contBandeau;
};
