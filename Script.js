let weatherData = {
    "manila": {
        temperature: "32°C",
        condition: "Sunny",
        humidity: "65%",
        wind: "12 km/h"
    },

    "cebu": {
        temperature: "29°C",
        condition: "Cloudy",
        humidity: "70%",
        wind: "10 km/h"
    },

    "davao": {
        temperature: "30°C",
        condition: "Rainy",
        humidity: "80%",
        wind: "15 km/h"
    }
};
function searchWeather() {
    let city = document.getElementById("city").value;

    document.getElementById("location").innerHTML = city;

    alert("Searching weather for " + city);
}
