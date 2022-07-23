let inputDate;

const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");
const hoursElement = document.getElementById("hours");
const daysElement = document.getElementById("days");

function countdown() {
  let inDate = new Date(localStorage.getItem("dateStorage"));

  let currentDate = new Date();
  let totalseconds = (inDate - currentDate) / 1000;

  let seconds = Math.floor(totalseconds) % 60;
  let minutes = Math.floor(totalseconds / 60) % 60;
  let hours = Math.floor(totalseconds / 60 / 60) % 24;
  let days = Math.floor(totalseconds / 60 / 60 / 24);

  if ((days, hours, minutes, seconds <= 0)) {
    secondsElement.innerHTML = "00";
    minutesElement.innerHTML = "00";
    hoursElement.innerHTML = "00";
    daysElement.innerHTML = "00";
  } else {
    secondsElement.innerHTML = formatTimer(seconds);
    minutesElement.innerHTML = formatTimer(minutes);
    hoursElement.innerHTML = formatTimer(hours);
    daysElement.innerHTML = formatTimer(days);
  }
}

function formatTimer(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

function startTimer() {
  let setDate = document.getElementById("date-input").value;
  let setTime = document.getElementById("time-input").value;

  if (setDate == "") {
    alert("Please enter a date.");
  } else if (setTime == "") {
    alert("Please enter a time.");
  } else {
    inDate = setDate + " " + setTime;

    localStorage.setItem("dateStorage", inDate);
    document.location = "countdown-timer.html";
  }
}

countdown();
setInterval(countdown, 1000);
