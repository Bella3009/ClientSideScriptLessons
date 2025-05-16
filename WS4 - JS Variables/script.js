function convertToFah(){
    let degreeInp = document.getElementById("Degree").value;

    let fahAns = (degreeInp * (9/5) + 32).toFixed(2);

    document.getElementById("Fahrenheit").value = fahAns;
}

function convertToCel() {
    let fahInp = document.getElementById("Fahrenheit").value;

    let degAns = ((fahInp - 32) * (5/9)).toFixed(2);

    document.getElementById("Degree").value = degAns;
}