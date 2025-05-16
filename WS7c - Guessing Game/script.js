//Global variable
let randomNumber;
let count;

//Below function will generate a random number between 1 and 20
function generateNumber(){
    randomNumber = Math.ceil(Math.random()*20);
    count = 0;
}

//Below function will check whether the user guesses the number (also for invalid inputs)
function check(){
    
    let guessNum = parseInt(document.getElementById("userInput").value);

    if (isNaN(guessNum)){
        document.getElementById("message").innerHTML = "Check your input!";
        document.getElementById("logo").style.backgroundColor = "white";
    }
    else if(guessNum > 20 || guessNum <= 0){
        document.getElementById("message").innerHTML = "Check your input!";
        document.getElementById("logo").style.backgroundColor = "white";
    }
    else{
        count++;
        console.log(count);

        if(guessNum == randomNumber) {
        // to change an image background color
            document.getElementById("logo").style.backgroundColor = "gold";
            document.getElementById("message").innerHTML = "You GUESSED!";
            document.getElementById("attemptMsg").innerHTML = " Guessed after " + count + " attempts!";
        }
        else if (guessNum < randomNumber){
            document.getElementById("logo").style.backgroundColor = "darkgreen";
            document.getElementById("message").innerHTML = "Your number is lower";
            document.getElementById("attemptMsg").innerHTML = " Attempts: " + count;
        }
        else{
            document.getElementById("logo").style.backgroundColor = "red";
            document.getElementById("message").innerHTML = "Your number is higher";
            document.getElementById("attemptMsg").innerHTML = " Attempts: " + count;
        }
    }
}