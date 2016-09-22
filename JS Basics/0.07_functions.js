//Declaration
function helloWorld(){
	console.log("Hello World");
}

//Call
helloWorld();

function printMyName(){
	console.log("Nick");
}

//Call
printMyName()

var name = function(){
	console.log("Nick");
}
//Call
name();



//Scope

function addNumbers(){
	var x = 10;
	var y = 10;
	console.log(x + y);
}

addNumbers();

function multiplyNumbers(){
	var x = 10;
	var y = 10;
	console.log(x * y);
}
multiplyNumbers();


//Parameters & Arguments
function randomNumber(x){
	console.log("The number you entered was:  " + x);
}

randomNumber(6);

function pinNumber(y){
	var cardPin = 45678;
	if(cardPin){
		console.log("Then you fail");
	} else {
	console.log("Correct");
}
}


//Argument
pinNumber(4321);

function numAdd(a, b){
	return a + b;
}

console.log(numAdd(1,2));