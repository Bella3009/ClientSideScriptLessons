// Global arrays

let topMovies = ["Inside Out 2", "Deadpool & Wolverine", "Despicable Me 4", "Dune: Part Two", "Moana 2", "Godzilla x Kong: The New Empire", "Kung Fu Panda 4", "Venom: The Last Dance", "Wicked", "Beetlejuice Beetlejuice"];
let topRating = [8.1, 7.7, 7.7, 7.6, 7.6, 7.5, 7.4, 7.4, 7.3, 7.2];

// Object Version
// let movies = {title:"Inside Out 2", rate: 8.1};

function showInfo(){

    for (let i = 0; i <topMovies.length; i++){
        document.getElementById("container").innerHTML += topMovies[i] + " - " + topRating[i] +"<br><br>";
    }
    // document.getElementById("container").innerHTML += topMovies[0] + " " + topRating[0] +"<br><br>";
    // document.getElementById("container").innerHTML += topMovies[1] + " " + topRating[1] +"<br><br>";
    // document.getElementById("container").innerHTML += topMovies[2] + " " + topRating[2] +"<br><br>";
    // document.getElementById("container").innerHTML += topMovies[3] + " " + topRating[3] +"<br><br>";
    // document.getElementById("container").innerHTML += topMovies[4] + " " + topRating[4] +"<br><br>";
    // document.getElementById("container").innerHTML += topMovies[5] + " " + topRating[5] +"<br><br>";
    // document.getElementById("container").innerHTML += topMovies[6] + " " + topRating[6] +"<br><br>";
    // document.getElementById("container").innerHTML += topMovies[7] + " " + topRating[7] +"<br><br>";
    // document.getElementById("container").innerHTML += topMovies[8] + " " + topRating[8] +"<br><br>";
    // document.getElementById("container").innerHTML += topMovies[9] + " " + topRating[9] +"<br><br>";
}