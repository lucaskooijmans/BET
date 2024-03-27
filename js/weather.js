let key = "7e6c828a1cfc435b830115527241903";
let temperature = 0;
let condition = "";

var currentCity = "";

async function getWeatherInformation(city) {
    let stadElement = document.querySelector("#weerStad");
    let gradenElement = document.querySelector("#weerGraden");
    let conditieElement = document.querySelector("#weerConditie");

	currentCity = city;

    await fetch("http://api.weatherapi.com/v1/current.json?key=" + key + "&q=" + city + "&aqi=no&lang=nl")
    .then(resp => resp.json())
    .then(data => {
        temperature = data.current.temp_c;
        condition = data.current.condition.text;

        stadElement.innerText = city;
        gradenElement.innerText = temperature;
        conditieElement.innerText = condition;
    })
    .catch( () => {
        console.log("Fout bij het ophalen van het weer");
    });
}

async function allowedToLeaveDueToWeather(type, city) {
    await fetch("http://api.weatherapi.com/v1/current.json?key=" + key + "&q=" + city + "&aqi=no&lang=nl")
    .then(resp => resp.json())
    .then(data => {
        temperature = data.current.temp_c;
        condition = data.current.condition.text;
    })
    .catch( () => {
        console.log("Fout bij het ophalen van de temperatuur");
    });

    if (temperature > 25 && type == "cold") {
        return false;
    }
    
    if (type == "fragile" && (condition == "Sneeuw" || condition == "Regen")) {
        return false;
    }
    return true;
}

function searchCity() {
    getWeatherInformation(document.getElementById("city").value);
	
	updateHallTruckButtons();
}

window.onload = () => {
    getWeatherInformation("Amsterdam");
	
	document.querySelector("#weather-button").addEventListener("click", searchCity);
} 