function setColour(){
    let userColour = document.getElementById("colInput").value;
    alert("Your chosen colour: " + userColour);
    document.getElementById("bodyid").style.backgroundColor = userColour;
}

function setLanguage(){
    // below if statement checks if 1st radio button (English) is selected
    // if (document.getElementById("ENG").checked == true){
    //     document.getElementById("mytitle").innerHTML = "Welcome to Malta!";
    //     document.getElementById("caption").innerHTML = "The capital city of Malta is Valletta.";
    // }
    // // below else if statement checks if 2nd radio button (Maltese) is selected
    // else if (document.getElementById("MLT").checked == true){
    //     document.getElementById("mytitle").innerHTML = "Merhba f'Malta!";
    //     document.getElementById("caption").innerHTML = "Il-belt kapitali ta' Malta hi Valletta.";
    // }
    // //  below else statement checks if 3rd (the remaining) radio button (Italian) is selected
    // else{
    //     document.getElementById("mytitle").innerHTML = "Benvenuti a Malta!";
    //     document.getElementById("caption").innerHTML = "La capitale di Malta e' Valletta.";
    // }

    // Below is Switch equivalent of above IF statements
    let chosenRadioButton = document.querySelector("input[name='lang']:checked").id;
    
    switch(chosenRadioButton){
        case "ENG":
            document.getElementById("mytitle").innerHTML = "Welcome to Malta!";
            document.getElementById("caption").innerHTML = "The capital city of Malta is Valletta.";
            break;
        case "MLT":
            document.getElementById("mytitle").innerHTML = "Merhba f'Malta!";
            document.getElementById("caption").innerHTML = "Il-belt kapitali ta' Malta hi Valletta.";
            break;
        default:
            document.getElementById("mytitle").innerHTML = "Benvenuti a Malta!";
            document.getElementById("caption").innerHTML = "La capitale di Malta e' Valletta.";
    }
}