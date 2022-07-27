const selectedDate = new Date(sessionStorage.getItem("dateStorage"));

const timerStatus = document.getElementById("timerContainer");

const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");
const hoursElement = document.getElementById("hours");
const daysElement = document.getElementById("days");

function countdown() {
  let currentDate = new Date();
  let totalseconds = (selectedDate - currentDate) / 1000;

  let seconds = Math.floor(totalseconds) % 60;
  let minutes = Math.floor(totalseconds / 60) % 60;
  let hours = Math.floor(totalseconds / 60 / 60) % 24;
  let days = Math.floor(totalseconds / 60 / 60 / 24);

  if ((days, hours, minutes, seconds <= 0)) {
    secondsElement.innerHTML = "00";
    minutesElement.innerHTML = "00";
    hoursElement.innerHTML = "00";
    daysElement.innerHTML = "00";

    timerStatus.id = "timerComplete";
    clearInterval(timer);
  } else {
    secondsElement.innerHTML = timerFormat(seconds);
    minutesElement.innerHTML = timerFormat(minutes);
    hoursElement.innerHTML = timerFormat(hours);
    daysElement.innerHTML = timerFormat(days);
  }
}

function timerFormat(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

//Clear sessionStorage and return to form
function returnToForm() {
  sessionStorage.clear();
  document.location = "countdown-form.html";
}

//Call countdown() function every 1s
const timer = setInterval(countdown, 1000);
