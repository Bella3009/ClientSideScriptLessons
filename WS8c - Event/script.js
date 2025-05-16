function symbolCheck(num){
    let symbol;
    switch (num){
        case 1:
            symbol = "&spades;";
            break;
        case 2:
            symbol = "&hearts;";
            break;
        case 3:
            symbol = "&diams;";
            break;
        case 4:
            symbol = "&clubs;";
            break;
        case 5:
            symbol = 5;
    }
    return symbol;
}

function numCheck(){
    let num1;
    let num2;
    let num3;

    // Set the random generated numbers
    num1 = Math.ceil(Math.random()*5);
    num2 = Math.ceil(Math.random()*5);
    num3 = Math.ceil(Math.random()*5);

    // Change them to symbols
    num1 = symbolCheck(num1);
    num2 = symbolCheck(num2);
    num3 = symbolCheck(num3);

    document.getElementById("result1").innerHTML = num1;
    document.getElementById("result2").innerHTML = num2;
    document.getElementById("result3").innerHTML = num3;

    if (num1==5 && num2==5 && num3==5){
        document.getElementById("Msg").innerHTML = "";
        window.open("images/jackpot.jpg")
    }

    else if (num1==num2 && num1==num3){
        document.getElementById("Msg").innerHTML = "";
        window.open("images/smallwin.jpg")
    }
    else{
        document.getElementById("Msg").innerHTML = "Please try again!";
    }
}