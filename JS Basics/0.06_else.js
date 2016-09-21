var elevatorUp = false;
var elevatorBroke = false;
var elevatorDown = true;
var elevatorStop = true;

if(elevatorUp === true) {
	console.log("Going Up");
} else {
	console.log("Going down");
}

if(elevatorBroke === false) {
	console.log("Good luck");
} else {
	console.log("You got lucky this time");
}

if(elevatorStop === true) {
	console.log("You should get off");
} else {
	console.log("Enjoy the music");
}

if(elevatorDown === true) {
	console.log("Enjoy the ride");
} else {
	console.log("Good luck you're stuck");
}

if(elevatorUp == true && elevatorBroke == false) {
	console.log("Then you're on the right path");
} else {
	console.log("Good luck buddy");
}

if(elevatorDown || elevatorUp) {
	console.log("keep your hands inside")
} else {
	console.log("have a great day")
}