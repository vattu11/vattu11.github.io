// Weather app

const card = document.querySelector(".card");
const cityName = document.querySelector(".search");
const weatherForm = document.querySelector(".weatherForm");

// API key goes here
const api = "";


// Event listener for the form
weatherForm.addEventListener("submit", async event => {

    event.preventDefault();
    const city = cityName.value;

    if (city) {
        try{
            const WeatherData = await getWeatherData(city);
            printWeatherData(WeatherData);
        }
        catch (error) {
            console.log(error);
            ErrorMessage(error);
        }

    }
    else {
        ErrorMessage("Please enter a city name.");
    }

});

// Fetch weather data from the API using openweathermap.org API
async function getWeatherData(cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}`;

    const response = await fetch(apiUrl);

    if(!response.ok) {
        throw new Error("City not found.");
    }
    return await response.json();


}

// Print weather data to the screen
function printWeatherData(data) {

    const {
        name: city,
        main: { temp, humidity },
        weather: [ { description , id } ]

    } = data;

    card.textContent = "";
    card.style.display = "flex";

    // Create elements city name and temperature
    const cityText = document.createElement("h2");
    const tempText = document.createElement("p");
    const humidityText = document.createElement("p");
    const decsText = document.createElement("p");

    cityText.textContent = city;
    tempText.textContent = `${Math.round(temp - 273.15)}°C`;
    humidityText.textContent = `Humidity: ${humidity}` + "%";
    decsText.textContent = description;

    cityText.classList.add("cityText");
    tempText.classList.add("tempText");
    humidityText.classList.add("humidityText");
    decsText.classList.add("descText");

    card.appendChild(cityText);
    card.appendChild(tempText);
    card.appendChild(humidityText);
    card.appendChild(decsText);


}


// Error message
function ErrorMessage(message) {
  const errorText = document.createElement("p");
  errorText.textContent = message;
  errorText.classList.add("error");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorText);
}