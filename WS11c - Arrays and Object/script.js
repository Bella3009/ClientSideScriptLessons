// declaring user data as an Array
let personArray = ["John", "Doe", "johndoe001", "pAss123", "123456-001", 2000];
// declaring user data as an Object
let personObject = {firstName:"John", lastName:"Doe", username:"johndoe001", pass:"pAss123", acNum:"123456-001", balance:2000};
// declaring user data as an Array of Objects 
let personArObj = [
    {firstName:"John", lastName:"Doe", username:"johndoe001", pass:"pAss123", acNum:"123456-001", balance:2000},
    {firstName:"Maria", lastName:"Doe", username:"mariadoe001", pass:"pAss456", acNum:"123456-002", balance:5000},
    {firstName:"Luke", lastName:"Doe", username:"lukedoe001", pass:"pAss789", acNum:"123456-003", balance:500}
];

// function to check that the username and password are valid
function validatedLogin(){
    // Check if username and password are valid
}

// function to show user and account data
function loadUserData(){
    document.getElementById("username").innerHTML = personObject.username
}

function logout(){
    window.open("index.html","_self")
}
// other needed functions: withdraw(), deposit() and logout()