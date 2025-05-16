// let sen;
// let num;

function valid(){
    let sent = document.getElementById("sentenceT").value;
    let numb = parseInt(document.getElementById("numberT").value);
    document.getElementById("textMsg").innerHTML = "";

    if (sent == ""){
        alert("Invalid sentence.");
    }
    else if (isNaN(numb)){
        alert("Number cannot be left empty")
    }
    else if (numb < 1){
        alert("The value must be larger or equal to 1.");
    }
    else if (numb > 100){
        alert("The value must be smaller or equal to 100.");
    }
    else{
        for (let i = 1; i <= numb; i++){
            document.getElementById("textMsg").innerHTML += i + " " + sent + "<br>";
        }
    }
}

// function checkText(){
//     sen = document.getElementById("sentenceT").value;

//     if (sen == ""){
//         alert("Sentence must be included.");
//         document.getElementById("sentenceT").focus;
//     }
    
//     return sen;
// }

// function checkNum(){
//     num = document.getElementById("numberT").value;

//     if (isNaN(num)){
//         alert("The value is not a number.");
//         document.getElementById("numberT").focus;
//         num = 0;
//     }
//     else if (num <= 1){
//         alert("The value must be larger or equal to 1.");
//         document.getElementById("numberT").value = "";
//         document.getElementById("numberT").focus;
//         num = 0;
//     }
//     else if (num >= 100){
//         alert("The value must be smaller or equal to 100.");
//         document.getElementById("numberT").value = "";
//         document.getElementById("numberT").focus;
//         num = 0;
//     }
//     return num;
// }

// function validLoop(){
//     sen = checkText();
//     num = checkNum();

//     if (sen == "" || num == 0){
//         alert("Enter the values according then press button again")
//     }
//     else{
//         for (let i = 1; i > num; i++){
//             document.getElementById("textMsg").innerHTML += i + " " + sen;
//         }
//     }
// }