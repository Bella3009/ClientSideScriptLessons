function clickFunc(){
    alert("Click Event!");
}
function mouseOverFunc(x){
    /*
    document.getElementById("inp1").value = "Mouse is moving!";
    document.getElementById("inp1").style.color = "pink";
    */
    x.value = "Mouse is moving!";
    x.style.color = "pink";
}

function mouseOutFunc(x){
    x.value = "";
    x.style.color = "black";
}

function mouseMoveFunc(x){
    x.value = "Mouse is over the textbox!";
    x.style.color = "darkblue";
}

function onFocusFunc(x){
    x.value = "This is focus!";
}

//blurr is the opposite of focus
function blurrFunc(x){
    x.value = "";
}

// mousedown event is triggered when the mouse button is pressed only (no need to release)
function mouseDownFunc(){
    alert("Similar to click event!")
}

function checkUsername(){
    let userName = document.getElementById("userInp").value;

    if (userName == ""){
        document.getElementById("userError").innerHTML = "Please fill in your username!";
    }
    else if (userName.length <5){
        document.getElementById("userError").innerHTML = "Username must be at least 5 characters!";
    }
    else{ // else is for when username input is valid
        document.getElementById("userError").innerHTML = "";
    }
}

function checkPassword(){
    let userName = document.getElementById("passInp").value;

    if (userName == ""){
        document.getElementById("passError").innerHTML = "Please fill in your password!";
    }
    else if (userName.length <6){
        document.getElementById("passError").innerHTML = "Password must be at least 6 characters!";
    }
    else{ // else is for when username input is valid
        document.getElementById("passError").innerHTML = "";
    }
}

function confirmPass(){
    let pass = document.getElementById("passInp").value;
    let confirm = document.getElementById("passInp2").value;
    
    if (pass != confirm){
        document.getElementById("passError2").innerHTML = "Your password does not match!"
    }
    else{
        document.getElementById("passError2").innerHTML = ""
    }
}

// below are the Event Listeners that replace events from the HTML;
// This is same as in body tag writing onload()
window.onload = function(){
    // Below is the event listener for replacing the onclick from input textbox1
    document.getElementById("inp1").addEventListener("click", clickFunc);

    // Below is the event listener for replacing the mouseover from the input textbox 1
    document.getElementById("inp1").addEventListener("mouseover",function(){mouseOverFunc(this)});

    document.getElementById("inp2").addEventListener("mousemove",function(){mouseMoveFunc(this)});

    document.getElementById("inp3").addEventListener("focus",function(){onFocusFunc(this)});

    document.getElementById("inp4").addEventListener("mousedown",mouseDownFunc);

    document.getElementById("userInp").addEventListener("keyup",checkUsername)
    document.getElementById("userInp").addEventListener("blur",checkUsername)

    document.getElementById("passInp").addEventListener("keyup",checkPassword)
    document.getElementById("passInp").addEventListener("blur",checkPassword)

    document.getElementById("passInp2").addEventListener("keyup",confirmPass)
    document.getElementById("passInp2").addEventListener("blur",confirmPass)
}