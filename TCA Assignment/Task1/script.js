var greeting = "Welcome to JavaScript Debugging question";

function showGreeting() {
  alert(greeting);
}

function showTime() {
  var time = new Date();
  document.getElementById("timeContainer").innerHTML =
    "Time now: " + time.toLocaleTimeString();
}

function showDate() {
  var date = new Date();
  document.getElementById("dateContainer").innerHTML =
    "Today's date: " + date.toLocaleDateString();
}

function changeToLightMode() {
  document.getElementById("bodyId").style.backgroundColor = "lightgreen";
  document.getElementById("bodyId").style.color = "darkgreen";
}

function changeToDarkMode() {
  document.getElementById("bodyId").style.backgroundColor = "darkgreen";
  document.getElementById("bodyId").style.color = "white";
}
