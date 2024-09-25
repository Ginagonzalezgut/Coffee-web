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

export default { getCoffee, getShops, getCountries };
