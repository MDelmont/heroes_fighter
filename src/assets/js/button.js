export const makeButton = (id, className, text) => {
  const btn = document.createElement("button");
  btn.id = id;
  btn.className = className; // Assurez-vous que className est un string
  btn.textContent = text; // Utilisez "=" au lieu de "()"
  return btn;
};
