function showCar(){
    // if (document.getElementById("red").checked == true)
    // {
    //     document.getElementById("carImage").src = "images/redFerrari.jpg";
    // }
    // //below we are checking if the first radio button (red one) is selected/checked
    // else if (document.getElementById("blue").checked == true)
    // {
    //     document.getElementById("carImage").src = "images/blueFerrari.jpg";
    // }
    // else if (document.getElementById("green").checked == true)
    // {
    //     document.getElementById("carImage").src = "images/greenFerrari.jpg";
    // }
    // else if (document.getElementById("grey").checked == true)
    // {
    //     document.getElementById("carImage").src = "images/greyFerrari.jpg";
    // }
    // else if (document.getElementById("yellow").checked == true)
    // {
    //     document.getElementById("carImage").src = "images/yellowFerrari.jpg";
    // }
    // else if (document.getElementById("other").checked == true)
    // {
    //     document.getElementById("carImage").src = "images/otherCar.jpg";
    // }

    //SWITCH version:
    let checkedRadio = document.querySelector("input[name='carColour']:checked").id;

    switch(checkedRadio){
        case "red":
            document.getElementById("carImage").src = "images/redFerrari.jpg";
            break;
        case "blue":
            document.getElementById("carImage").src = "images/blueFerrari.jpg";
            break;
        case "green":
            document.getElementById("carImage").src = "images/greenFerrari.jpg";
            break;
        case "grey":
            document.getElementById("carImage").src = "images/greyFerrari.jpg";
            break;
        case "yellow":
            document.getElementById("carImage").src = "images/yellowFerrari.jpg";
            break;
        default:
            document.getElementById("carImage").src = "images/otherCar.jpg";
            
    }
}