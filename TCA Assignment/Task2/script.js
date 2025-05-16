function calculateCategory() {
  let userInput = parseInt(document.getElementById("userInput").value);

  if (userInput < 0 || userInput > 20) {
    document.getElementById("container").innerHTML = "";
    document.getElementById("overtimeImg").src = "images/overtime.jpg";
    alert("Number must be between 0 and 20");
  } else if (userInput >= 0 && userInput <= 20) {
    if (userInput == 0) {
      document.getElementById("container").innerHTML = "No Overtime";
      document.getElementById("overtimeImg").src = "images/overtime1.JPG";
    } else if (userInput <= 8) {
      document.getElementById("container").innerHTML = "Moderate Overtime";
      document.getElementById("overtimeImg").src = "images/overtime2.jpg";
    } else if (userInput <= 20) {
      document.getElementById("container").innerHTML = "Excessive Overtime";
      document.getElementById("overtimeImg").src = "images/overtime3.jpg";
    }
  } else {
    document.getElementById("container").innerHTML = "";
    document.getElementById("overtimeImg").src = "images/overtime.jpg";
    alert("Enter a valid number");
  }
}
