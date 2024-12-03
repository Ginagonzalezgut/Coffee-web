const apiURL = import.meta.env.VITE_API_URL;

async function getCoffee() {
  const response = await fetch(`${apiURL}/coffee`);
  const data = await response.json();
  return data;
}

async function getShops() {
  const response = await fetch(`${apiURL}/shops`);
  const data = await response.json();
  return data;
}

async function getCountries() {
  const response = await fetch(`${apiURL}/countries`);
  const data = await response.json();
  return data;
}

async function getShop(id) {
  const response = await fetch(`${apiURL}/shop/${id}`);
  const data = await response.json();
  return data;
}

async function getBreweries() {
  const response = await fetch(`${apiURL}/breweries`);
  const data = await response.json();
  return data;
}

async function getSpecialtyCoffeeShops() {
  const response = await fetch(`${apiURL}/specialty-coffee-shops`);
  const data = await response.json();
  return data;
}

async function getBrunch() {
  const response = await fetch(`${apiURL}/brunch`);
  const data = await response.json();
  return data;
}
function postUser(newUser) {
  return fetch(`${apiURL}/register`, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: { "Content-Type": "application/json" },
  });
}
function postLogin(loginUser) {
  return fetch(`${apiURL}/login`, {
    method: "POST",
    body: JSON.stringify(loginUser),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
async function getGelato() {
  const response = await fetch(`${apiURL}/gelato`);
  const data = await response.json();
  return data;
}
export default {
  getCoffee,
  getShops,
  getCountries,
  getShop,
  getBreweries,
  getSpecialtyCoffeeShops,
  getBrunch,
  postUser,
  postLogin,
  getGelato,
};
