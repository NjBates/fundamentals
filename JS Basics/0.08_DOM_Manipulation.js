alert("You finally made it, welcome!");
var hobbiesList =  document.getElementById("hobby-list");
console.log(hobbiesList);
var hobbies = document.getElementsByClassName("hobby");
console.log(hobbies[0].innerHTML);   //an array
console.log(hobbies[1].innerHTML);
console.log(hobbies[2].innerHTML);
console.log(hobbies[3].innerHTML);
console.log(hobbies[4].innerHTML);
function bestSong() {
	document.getElementById("best").innerHTML = "Bohemian Rhadsophy";
}

bestSong();

function favoriteSong() {
	document.getElementById("favorite").innerHTML = "Cocoa Butter Kisses";
}

favoriteSong();

function worstSong() {
	document.getElementById("worst").innerHTML = "What does the Fox say";
}

worstSong();