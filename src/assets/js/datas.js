export let env = require("../../data/auth.json");
export let datas;

/**
 * get data from api
 * @returns
 */
export const data = async () => {
  return fetch(`https://superheroapi.com/api.php/${env.token}/search/a`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      datas = data;
    })
    .catch((error) => {
      console.error("Erreur lors de l'importation des données", error);
    });
};

/**
 *
 * @param {String} name race | editeur | name
 * @returns {object} list of filter
 */
export const takeList = (name) => {
  const list = new Set();

  for (const key in datas.results) {
    const data = datas.results[key];

    if (name === "race" && data.appearance?.race) {
      list.add(data.appearance.race);
    } else if (name === "editeur" && data.biography?.publisher) {
      list.add(data.biography.publisher);
    } else if (name === "name") {
      list.add([data.id, data.name]);
    }
  }

  let resultList = Array.from(list);

  if (name === "name") resultList.unshift([,]);
  else resultList.unshift(null);

  return resultList;
};

/**
 *
 * @param {integer} id
 * @returns {string} url image if exist
 */
export const characterImage = async (id) => {
  return fetch(`https://superheroapi.com/api.php/${env.token}/${id}/image`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut : ${response.status}`);
      }
      return response.json();
    })
    .then((image) => {
      return image.url;
    })
    .catch((error) => {
      console.error("Erreur : ", error);
      return null;
    });
};

export const takecharacterByID = (id) => {
  return datas.results.filter((character) => {
    if (character.id == id) {
      return character;
    }
  })[0];
};

/**
 *  Update img for select part
 * @param {String} selectedValue
 * @param {Integer} selectedOptionId
 * @param {String} img
 * @returns
 */
export const updateImageSource = (selectedValue, selectedOptionId, img) => {
  if (selectedValue === "") return img.classList.add("d-none");

  characterImage(selectedOptionId)
    .then((imgSrc) => {
      img.classList.remove("d-none");
      img.src = imgSrc;
    })
    .catch((err) => {
      console.error("Pas d'image disponible", err);
      if (!img.classList.contains("d-none")) img.classList.add("d-none");
    });
};
