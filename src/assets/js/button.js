export const makeButton = (id, className, text) => {
  const btn = document.createElement("button");

  btn.id = id;
  btn.className = className;
  btn.textContent = text;

  return btn;
};
