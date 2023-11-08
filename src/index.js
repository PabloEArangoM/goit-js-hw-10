import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const breedSelect = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

loader.style.display = "none";
error.style.display = "none";

fetchBreeds()
  .then((breeds) => {
    breeds.forEach((breed) => {
      const option = document.createElement("option");
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
  })
  .catch((err) => {
    error.style.display = "block";
    console.error("Error fetching breeds:", err);
  });

breedSelect.addEventListener("change", () => {
  const selectedBreedId = breedSelect.value;
  loader.style.display = "block";
  error.style.display = "none";
  catInfo.innerHTML = "";

  fetchCatByBreed(selectedBreedId)
    .then((catData) => {
      loader.style.display = "none";
      const catImage = document.createElement("img");
      catImage.src = catData[0].url;
      const catName = document.createElement("p");
      catName.textContent = `${catData[0].breeds[0].name}`;
      const catDescription = document.createElement("p");
      catDescription.textContent = `${catData[0].breeds[0].description}`;
      const catTemperament = document.createElement("p");
      catTemperament.textContent = `Temperament: ${catData[0].breeds[0].temperament}`;
      catInfo.appendChild(catImage);
      catInfo.appendChild(catName);
      catInfo.appendChild(catDescription);
      catInfo.appendChild(catTemperament);
    })
    .catch((err) => {
      loader.style.display = "none";
      error.style.display = "block";
      console.error("Error fetching cat info:", err);
    });
});
