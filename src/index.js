// CSS
import "./assets/scss/buttons.scss";
import "./assets/scss/font.scss";
import "./assets/scss/formTab.scss";
import "./assets/scss/modal.scss";
import "./assets/scss/nav.scss";
import "./assets/scss/selectHeroes.scss";
import "./assets/scss/table.scss";
import "./assets/scss/contBandeau.scss";
import "./assets/scss/versus.scss";
// JS
import "./assets/js/app";
import "./assets/js/listener";

export function randomRotation() {
  return Math.floor(Math.random() * 11) - 5; // Génère un nombre aléatoire entre -5 et +5
}
