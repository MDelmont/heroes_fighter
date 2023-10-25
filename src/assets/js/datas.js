let env = require("../../data/auth.json");
export const data = async () => {
  return fetch(`https://superheroapi.com/api.php/${env.token}/search/a`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("blabla", error);
    });
};
