const apikey = "f458f91929bcdd3aba4635302a2c1ae2";
const url = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getWeatherByLocation(location) {
    const response = await fetch(url(location), {
        origin: "cors" });
    const responseData = await response.json();

    console.log(responseData);
    console.log(KelvToCels(responseData.main.temp));
    addWeatherToPage(responseData);
};

function addWeatherToPage(data) {
    const temp = KelvToCels(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");
    
    weather.innerHTML = `
    <p>${data.name}, ${data.sys.country}</p>
    <h2>
    <img src="https://api.openweathermap.org/img/w/${data.weather[0].icon}.png"/>
    ${temp}&deg;C 
    <img src="https://api.openweathermap.org/img/w/${data.weather[0].icon}.png"/>
    </h2>
    <small>${data.weather[0].main}</small>
    `;
    main.innerHTML = " ";
    main.appendChild(weather);

    console.log(data.name);
    console.log(data.sys.country);
}

function KelvToCels(kelvin) {
    return Math.floor(kelvin - 273.15);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const location = search.value;
    if(location) {
        getWeatherByLocation(location);
    };
});