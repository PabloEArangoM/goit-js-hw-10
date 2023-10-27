import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_LZbHbfqTUTWX65jX1m19S9ePfMQiwCwT778LrFDKD05ST99c7eDL0hSCZAI3GWwG"; // Reemplaza "tu_llave" con tu clave de acceso

export function fetchBreeds() {
  return axios
    .get("https://api.thecatapi.com/v1/breeds")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
