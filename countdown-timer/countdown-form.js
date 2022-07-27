//Set minimum date to today
document.getElementById("dateField").min = new Date().toISOString().split("T")[0];

function startTimer() {
  let inputDate = document.getElementById("dateField").value;
  let inputTime = document.getElementById("timeField").value;

  //Validate Date and Time inputs
  if (inputDate == "") {
    alert("Please enter a date.");
  } else if (inputTime == "") {
    alert("Please enter a time.");
  } else {
    selectedDate = inputDate + " " + inputTime;

    //Store selectedDate in sessionStorage
    sessionStorage.setItem("dateStorage", selectedDate);
    document.location = "countdown-timer.html";
  }
}

function clearInput() {
  document.getElementById("dateField").value = null;
  document.getElementById("timeField").value = null;
}
