function showMessage(){
    alert("Hello and welcome to our website!");
}
function showForm(){
    document.getElementById("formDisplay").style.display="block";
}
function checkForm(){
    let fullName = document.getElementById("fName").value;
    let comment = document.getElementById("comm").value;

    if (fullName == "" || comment == ""){
        alert("Please enter all inputs");
        return false;
    }
}