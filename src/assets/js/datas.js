let env = require("../../data/auth.json");

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
  let list = [""];

  for (const data of datas.results) {
    switch (name) {
      case "race":
        // Code à exécuter si expression correspond à race
        if (!list.includes(data?.appearance?.race)) {
          list.push(data?.appearance?.race);
        }
        break;

      case "editeur":
        // Code à exécuter si expression correspond à editeur
        if (!list.includes(data?.biography?.publisher)) {
          list.push(data?.biography?.publisher);
        }
      case "name":
        list.push([data?.id, data?.name]);
        break;
    }
  }
  return list;
};
