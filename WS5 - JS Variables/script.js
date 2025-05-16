// Global variables:
let str1 = "99 bottles of beer.";
let str2 = "People are taking bottles of beer.";
let str3 = "3.51Euro is the beer prince."
let str4 = "There are 26 bottles. 3 different brands.";

function showInfo(){
    document.getElementById("par1").innerHTML = str1;
    document.getElementById("par2").innerHTML = str2;
    document.getElementById("par3").innerHTML = str3;
    document.getElementById("par4").innerHTML = str4;

    let name = prompt("Please enter your name: ")
    document.getElementById("heading").innerHTML = "Welcome to our page, " + name + "!";
}

function str1ToInt(){
    let res1 = parseInt(str1);
    document.getElementById("Result1").innerHTML=res1;
}

function str2ToInt(){
    let res2 = parseInt(str2);
    document.getElementById("Result2").innerHTML=res2;
}

function str3ToInt(){
    let res3 = parseInt(str3);
    document.getElementById("Result3").innerHTML=res3;
}
function str3ToFloat(){
    let fRes3 = parseFloat(str3);
    document.getElementById("Result3").innerHTML=fRes3;
}

function str4ToInt(){
    let res4 = parseInt(str4); // parse is only if begins with number
    document.getElementById("Result4").innerHTML=res4;
}