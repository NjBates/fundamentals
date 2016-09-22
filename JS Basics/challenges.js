function bills(){
	var gas = 75
	var water = 10
	var phone = 80
	var mortgage = 700
	var electricity = 100
	console.log(gas + water + phone + mortgage + electricity)
}

bills()

function soda(){
	var pop = 100;
	var cost = .99;
	var tax = .07;
	var x = pop * cost
	var taxAdd = x * tax
	var total = taxAdd + x
	console.log(total + " will your overall total")
}

soda();

function monthlyBills(rent, phone, dateNight) {
	return rent + phone + dateNight;
}

console.log(monthlyBills(200, 50, 1000))

function soda(pop, cost, tax){
	return ((pop * cost) * tax) + (pop * cost)
}

console.log("Your total will be", soda(100, .99, .07))

