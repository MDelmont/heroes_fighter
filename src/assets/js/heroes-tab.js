const headers = [
  "Nom",
  "Intelligence",
  "Force",
  "Vitesse",
  "Durabilité",
  "Pouvoir",
  "Combat",
  "Éditeur",
  "Genre",
  "Race",
];

const createTable = (data) => {
  const table = document.createElement("table");
  const tabHead = document.createElement("thead");
  const tabBody = document.createElement("tbody");

  //Headers
  const headerRow = document.createElement("tr");
  headers.forEach((header) => {
    const tabHeader = document.createElement("th");
    tabHeader.innerText = header;
    headerRow.appendChild(tabHeader);
  });

  tabHead.appendChild(headerRow);
  table.appendChild(tabHead);

  //Datas
  const dataRow = document.createElement("tr");
  [
    data.name,
    data.powerstats.intelligence,
    data.powerstats.strengtabHeader,
    data.powerstats.speed,
    data.powerstats.durability,
    data.powerstats.power,
    data.powerstats.combat,
    data.biography.publisher,
    data.appearance.gender,
    data.appearance.race,
  ].forEach((item) => {
    const tabData = document.createElement("td");
    tabData.innerText = item;
    dataRow.appendChild(tabData);
  });
  tabBody.appendChild(dataRow);
  table.appendChild(tabBody);

  return table;
};

const apiData = {
  response: "success",
  id: "70",
  name: "Batman",
  powerstats: {
    intelligence: "100",
    strengtabHeader: "26",
    speed: "27",
    durability: "50",
    power: "47",
    combat: "100",
  },
  biography: {
    "full-name": "Bruce Wayne",
    "alter-egos": "No alter egos found.",
    aliases: ["Insider", "Matches Malone"],
    "place-of-birtabHeader":
      "Crest Hill, Bristol Township; GotabHeaderam County",
    "first-appearance": "Detective Comics #27",
    publisher: "DC Comics",
    alignment: "good",
  },
  appearance: {
    gender: "Male",
    race: "Human",
    height: ["6'2", "188 cm"],
    weight: ["210 lb", "95 kg"],
    "eye-color": "blue",
    "hair-color": "black",
  },
  work: {
    occupation: "Businessman",
    base: "Batcave, Stately Wayne Manor, GotabHeaderam City; Hall of Justice, Justice League Watchtower",
  },
  connections: {
    "group-affiliation":
      "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
    relatives:
      "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartabHeadera Wayne (motabHeaderer, deceased), tabHeaderomas Wayne (fatabHeaderer, deceased), Alfred PennywortabHeader (former guardian), Roderick Kane (grandfatabHeaderer, deceased), ElizabetabHeader Kane (grandmotabHeaderer, deceased), NatabHeaderan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family",
  },
  image: {
    url: "httpss://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
  },
};

const tableContainer = document.getElementById("tableContainer");
tableContainer.appendChild(createTable(apiData));
