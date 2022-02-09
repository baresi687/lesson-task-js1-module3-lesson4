// 1

const CORS_URL = "https://noroffcors.herokuapp.com/";
const API_URL = "https://elephant-api.herokuapp.com/elephants";

const corsFix = CORS_URL + API_URL;

async function getElephants() {
  const response = await fetch(corsFix);
  const results = await response.json();
  console.log(results);
}

getElephants();

// 2

const API_ADD_HEADERS =
  "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat&rapidapi-key=f1f6bf4f35msh6bce51834ab65fep1142d8jsne932f1fff042";
// const options = {
//   headers: {
//     "x-rapidapi-key": "f1f6bf4f35msh6bce51834ab65fep1142d8jsne932f1fff042",
//   },
// };
async function callUrbanDictionary() {
  const response = await fetch(API_ADD_HEADERS);
  const results = await response.json();
  console.log(results);
}

callUrbanDictionary();
