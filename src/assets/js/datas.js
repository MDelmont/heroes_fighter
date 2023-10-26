export let env = require("../../data/auth.json");

export let datas;

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
      console.log("Erreur lors de l'importation des données", error);
    });
};

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

  if (name !== "name") resultList.unshift(null);

  return resultList;
};

export const characterImage = (id) => {
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
