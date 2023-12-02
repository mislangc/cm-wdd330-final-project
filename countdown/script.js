//Base date
let eventDate = "1 Jan 2024";

//Get countdown containers and other elements
let body = document.querySelector("body"); //get to change background image according to event
let eventName = document.querySelector("#event-name"); //get span to change event name in h1
let h1 = document.querySelector("h1"); //get to change colorof text depends on the background image
let countdownContainer = document.querySelector("#countdown-container"); 

let secondsContainer = document.querySelector("#seconds");
let minutesContainer = document.querySelector("#minutes");
let hoursContainer = document.querySelector("#hours");
let daysContainer = document.querySelector("#days");

let backgroundImage = document.querySelector("#background-image");

//Get event buttons
let buttons = document.getElementsByTagName("button");
let newYearButton = document.querySelector("#new-year");
let christmasButton = document.querySelector("#christmas");
let valentinesButton = document.querySelector("#valentines");

//Define functions to change event countdown and other elements
function changeToNewYear() {
    eventName.innerHTML = "New Year's Eve"
    eventDate = "1 Jan 2024";
    backgroundImage.src = `images/new-year-background.jpg`;
    countdownContainer.style.color = "white";
    h1.style.color = "white";
    for (i = 0 ; i < buttons.length ; i++) {
        buttons[i].style.color = "white";
        buttons[i].style.backgroundColor = "black";
    }
    
}
function changeToChristmas() {
    eventName.innerHTML = "Christmas"
    eventDate = "25 Dec 2023";
    backgroundImage.src = `images/christmas-background.jpg`;
    countdownContainer.style.color = "black";
    h1.style.color = "black";
    for (i = 0 ; i < buttons.length ; i++) {
        buttons[i].style.color = "white";
        buttons[i].style.backgroundColor = "green";
    }
}
function changeToValentines() {
    eventName.innerHTML = "Valentine's Day"
    eventDate = "14 Feb 2024";
    backgroundImage.src = `images/valentines-background.jpg`;
    countdownContainer.style.color = "black";
    h1.style.color = "black";
    for (i = 0 ; i < buttons.length ; i++) {
        buttons[i].style.color = "white";
        buttons[i].style.backgroundColor = "maroon";
    }
}

//Connect buttons to functions via Event Listener
newYearButton.addEventListener("click", changeToNewYear);
christmasButton.addEventListener("click", changeToChristmas);
valentinesButton.addEventListener("click", changeToValentines);

function countdown() {
    let currentDate = new Date();
    let theEventDate = new Date(eventDate);
    let totalSeconds = (theEventDate - currentDate) / 1000;

    let seconds = Math.floor(totalSeconds) % 60;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let hours = Math.floor(totalSeconds/ 3600) % 24;
    let days = Math.floor(totalSeconds / 3600 / 24);

    secondsContainer.innerHTML = formatTime(seconds);
    minutesContainer.innerHTML = formatTime(minutes);
    hoursContainer.innerHTML = formatTime(hours);
    daysContainer.innerHTML = formatTime(days);
}

function formatTime(time) {
    if (time < 10) {
        return `0${time}`;
    } else {
        return time;
    }
}

setInterval(countdown, 1000);