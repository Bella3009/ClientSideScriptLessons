function showDateTime(){
    // The variable dt will store the current date and time in it
    let dt = new Date();
    document.getElementById("timeStamp").innerHTML += dt;
}

function add(){
    let num1 = parseFloat(document.getElementById("inp1").value);
    let num2 = parseFloat(document.getElementById("inp2").value);

    document.getElementById("result1").innerHTML = num1 + num2;
}

function subtract(){
    let num1 = parseFloat(document.getElementById("inp1").value);
    let num2 = parseFloat(document.getElementById("inp2").value);

    document.getElementById("result2").innerHTML = num1 - num2;
}

function multiple(){
    let num1 = parseFloat(document.getElementById("inp1").value);
    let num2 = parseFloat(document.getElementById("inp2").value);

    document.getElementById("result3").innerHTML = num1 * num2;
}

function divide(){
    let num1 = parseFloat(document.getElementById("inp1").value);
    let num2 = parseFloat(document.getElementById("inp2").value);

    document.getElementById("result4").innerHTML = num1 / num2;
}

function power(){
    let num1 = parseFloat(document.getElementById("inp1").value);
    let num2 = parseFloat(document.getElementById("inp2").value);

    document.getElementById("result5").innerHTML = num1 ** num2;
}