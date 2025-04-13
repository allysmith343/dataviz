
// Global variable with 60 attractions (JSON format)
// console.log(attractionData);
dataManipulation();

function dataManipulation() {
	var attractions = attractionData;

	var selectBox = document.getElementById("attraction-category");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	
	var filteredAtt = attractions.filter(checkAttractions);
	function checkAttractions(value) {
		if (selectedValue == "all") {
			return true;
		} else {
			return selectedValue == value.Category;
		}
	}
	dataFiltering(filteredAtt);
}


function dataFiltering(filteredAtt) {

	//sort descending
	filteredAtt.sort( function(a, b){
		return b.Visitors - a.Visitors;
	});

	var topFive = filteredAtt.slice(0,5);
	
	renderBarChart(topFive);


	/* **************************************************
	 *
	 * ADD YOUR CODE HERE (ARRAY/DATA MANIPULATION)
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

}



//Activities 1 and 2 Code:

/* var attractions = [
	{id: "123",
    name: "BuschGardens",
    price: 54,
    days: ["Thursday", "Friday","Saturday","Sunday"],
    children: "No"},

	{id: "1234",
    name: "Disney",
    price: 200,
    days: ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    children: "No"},
	
	{id: "12345",
    name: "Carowinds",
    price: 75,
    days: ["Sunday","Saturday"],
    children: "Yes"}]

//console.log("Name of first amusement ride: " + attractions[0].name);
//console.log("Days the second attraction is open: " + attractions[1].days);
//console.log("First Day second attraction is open: " + attractions[1].days[0]);
//console.log("There is a 50% discount for third attraction: " + attractions[2].price/2);

// Calling the function
var attractionsDouble = doublePrices(attractions);

// Implementation of the function
function doublePrices(attractions) {
	for (var i = 0; i < attractions.length; i++) {
		if (i !== 1) {
			attractions[i].price *= 2;
		}
	}
	return attractions;
}
//console.log(attractionsDouble);

var updatedPrices = debugAmusementRides(attractionsDouble);

function debugAmusementRides(attractions) {
    attractions.forEach(function(attraction) {
        console.log(attraction.name + ": " + attraction.price);
    });
}

var message = function(firstName) {
	return "Hello, I'm " + firstName + ".";
}
// We can call the function to get the expected message
console.log(message("Oprah"));  // Returns: Hello, I'm Oprah


// ---- Filter Example 1 - Get all cities except London ----
var cities = ["Dubai", "Hong Kong", "London", "London"];

// Pass a function to cities.filter()
var filteredCities = cities.filter(checkCity);

// Implementation of passed function
function checkCity(value) {
	return value != "London";
}
filteredCities // Returns: ["Dubai", "Hong Kong"]
console.log(filteredCities);

// ---- Filter Example 2 - Get all numbers which are >= 10 and have array indices > 3 ----
var numericData = [1, 20, 3, 40, 5, 60, 7, 80];

// Use an anonymous function in numericData.filter
// (the anonymous function takes the array element's current value and index as parameters)
var filteredNumericData = numericData.filter( function(value, index) {
return (value >= 10) && (index > 3);
});

filteredNumericData // Returns: [60, 80]
console.log(filteredNumericData);

// ---- Sort Example 1 - Filter array with strings (default sorting) ----
var cities = ["Dubai", "Hong Kong", "London", "Munich", "Cairo"];
cities.sort();
cities  // Returns: ["Cairo", "Dubai", "Hong Kong", "London", "Munich"]
console.log(cities);

// ---- Sort Example 2 - Filter array with objects ----
// We are specifying a function that defines the sort order
var products = [
	{ name: "laptop", price: 800 },
	{ name: "phone", price:200},
	{ name: "tv", price: 1200}
];

// Sort ascending by the 'price' property
products.sort( function(a, b){
	return a.price - b.price;
});

 // Sort descending by the 'price' property
 products.sort( function(a, b){
	return b.price - a.price;
});

// ---- Map Example 1 - Calculate the square root ----
var numericData = [1, 4, 9];
var roots = numericData.map(Math.sqrt);

console.log( roots);   // Returns: [1, 2, 3]

// ---- Map Example 2 - Double the prices ----
var products = [
	{ name: "laptop", price: 800 },
	{ name: "phone", price:200},
	{ name: "tv", price: 1200}
];

var expensiveProducts = products.map(doublePrice);

function doublePrice(elem){
	elem.price = elem.price * 2;
	return elem;
}
console.log(expensiveProducts); // Returns: [{ name: "laptop", price: 1600 }, { name: "phone", price: 400}, { name: "tv", price: 2400}]*/
