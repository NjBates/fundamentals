var bankAccount = 500000;
var appleWatch = 400;
var appleWatchGold = 10000;

if(bankAccount < appleWatch) {
console.log("make it rain boi");
} else if(bankAccount < appleWatchGold) {
console.log("Start selling your plasma!")
} else {
console.log("Get a job you hippie.")
}

var footballTickets = 150
var beer = 800
var nachos = 4 

if(footballTickets > beer) {
console.log("It better be the best beer ever");
} else if(nachos < beer) {
console.log("Get drunk")
} else {
console.log("Enjoy the game")
}

var personAge = 17;
var votingAge = 18;
var registeredVote = false;

if((personAge >= votingAge) && (registeredVote === true)) {
	console.log("you are eligible to vote")
} else if ((personAge >= votingAge) && (registeredVote === false)) {
	console.log("go get registered and make a difference")
} else {
	console.log("not old enough to vote")
}

var numberOne = 7;

if((numberOne % 2 === 0) && (numberOne % 3 === 0)) {
console.log("Number is divisable by 2 and 3")
} else if(numberOne % 2 == 0) {
console.log("Number is divisable by 2")
} else {
console.log("Number is not divisable by 2 or 3")
}

