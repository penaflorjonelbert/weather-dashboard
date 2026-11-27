function searchWeather() {
    let city = document.getElementById("city").value;

    document.getElementById("location").innerHTML = city;

    alert("Searching weather for " + city);
}
