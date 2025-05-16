function redOn(){
    document.getElementById("red").style.background="red";
    document.getElementById("amber").style.background="grey";
    document.getElementById("green").style.background="grey";
}

function amberOn(){
    document.getElementById("red").style.background="grey";
    document.getElementById("amber").style.background="#FFBF00";
    document.getElementById("green").style.background="grey";
}

function greenOn(){
    document.getElementById("red").style.background="grey";
    document.getElementById("amber").style.background="grey";
    document.getElementById("green").style.background="green";
    document.getElementById("btnLight").disabled = false;
}

function startLight(){
    document.getElementById("btnLight").disabled = true;
    setTimeout(amberOn, 3000);
    setTimeout(redOn, 4000);
    setTimeout(amberOn, 17000);
    setTimeout(greenOn, 18000);
}