export const env = require("../../data/auth.json");
export let datas;

/**
 * get data from api
 * @returns
 */
export const data = async () => {
  let dataTemps = [];
  const searchLetter = ["a", "e", "i", "o", "u", "q", "y", "t", "x"];

  const fetchPromises = searchLetter.map((letter) => {
    return fetch(
      `https://superheroapi.com/api.php/${env.token}/search/${letter}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dataTemps.push(data.results);
      })
      .catch((error) => {
        console.error("Erreur lors de l'importation des données", error);
      });
  });

  // Attendre que toutes les promesses se terminent
  await Promise.all(fetchPromises);

  const uniqueData = dataTemps.flat().filter((value, index, self) => {
    return self.findIndex((obj) => obj.id === value.id) === index;
  });
  datas = { results: uniqueData };
};

/**
 *
 * @param {object} uniqueData
 * @returns {object} liste d'ID qui manque
 */
function findMissingIds(uniqueData) {
  // Créez un tableau contenant tous les nombres de 1 à 731
  const allIds = Array.from({ length: 731 }, (_, index) =>
    (index + 1).toString()
  );

  // Extrait les `ids` de uniqueData
  const ids = uniqueData.map((o) => o.id.toString());

  // Compare les deux tableaux pour trouver les numéros manquants
  const missingIds = allIds.filter((id) => !ids.includes(id));
  console.log(missingIds);
  return missingIds;
}

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

export const takeCharacterByID = (id) => {
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
