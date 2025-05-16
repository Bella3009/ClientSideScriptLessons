function ValidateAndCalculate() {
  event.preventDefault();

  let txtName = document.getElementById("fullName").value.trim();
  let selPlant = document.getElementById("plantTypes").value;
  let radioChoice = document.querySelector('input[name="garden"]:checked');
  let gardenChoice = radioChoice ? radioChoice.value : null;
  let quantity = parseInt(document.getElementById("quantity").value);

  if (
    txtName.length == 0 ||
    !gardenChoice ||
    isNaN(quantity) ||
    quantity <= 0
  ) {
    alert("Please check your inputs and try again.");
    return;
  }

  let [suggestion, price] = PlantSuggestion(selPlant, gardenChoice);
  document.getElementById("quote").style.border = "thin solid blue";
  document.getElementById("quoteTitle").innerHTML = "Suggestions details:";
  document.getElementById("suggestion").innerHTML =
    "The " + selPlant + " was selected and you ";

  if (gardenChoice === "Yes") {
    document.getElementById("suggestion").innerHTML +=
      "have a garden. Therefore the best plant would be: ";
  } else {
    document.getElementById("suggestion").innerHTML +=
      "do not have a garden. Therefore the best plant would be: ";
  }

  document.getElementById("suggestionResult").innerHTML = suggestion;
  document.getElementById("unitPrice").innerHTML =
    "Unit price: € " + price.toFixed(2);
  document.getElementById("total").innerHTML =
    "Total Value: € " + parseFloat(price * quantity).toFixed(2);
}

function PlantSuggestion(plant, haveGarden) {
  if (plant == "flowers") {
    if (haveGarden == "Yes") {
      return ["Petunia", 1];
    } else {
      return ["African Violet", 2.5];
    }
  } else if (plant == "hedges") {
    if (haveGarden == "Yes") {
      return ["Metrosideros", 18];
    } else {
      return ["Boston Hedges", 10];
    }
  } else if (plant == "climbers") {
    if (haveGarden == "Yes") {
      return ["Bongavilla", 18];
    } else {
      return ["Cheese Plant", 10];
    }
  } else if (plant == "crawlers") {
    if (haveGarden == "Yes") {
      return ["Heartleaf Philodendron", 2.5];
    } else {
      return ["Gazania Regins", 10];
    }
  }
}
function ValidateForm() {
  let txtName = document.getElementById("fullName").value;
  let txtEmail = document.getElementById("email").value;
  let txtTelephone = parseInt(document.getElementById("contact").value);
  let txtComments = document.getElementById("comments").value;

  if (
    txtName.length == 0 ||
    txtEmail.length == 0 ||
    !/^\d{8}$/.test(txtTelephone)
  ) {
    alert(
      "Note: ALL inputs are Mandatory, please amend your entries and try again."
    );
    return;
  }
  window.location.href =
    "mailto:sara.bella.i84760@mcast.edu.mt?subject=Plant Suggestions&body=" +
    txtComments;
}
