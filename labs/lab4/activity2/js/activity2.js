
// SVG drawing area

var margin = {top: 40, right: 10, bottom: 60, left: 60};

var width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("#chart-area").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left} , ${margin.top})`);


// Scales
var x = d3.scaleBand()
    .range([0, width - margin.right - margin.left])
    .paddingInner(0.05);

var y = d3.scaleLinear()
    .range([height, 0]);

var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft(y);

// Initialize data
//var selectedOption = "stores"; // Default selected option

loadData(); // Load initial data

// Initialize data
// // loadData();

// Coffee chain data -- leave this.
var data;

// Load CSV file
function loadData() {
	d3.csv("data/coffee-house-chains.csv")
        .then(csv => {

		csv.forEach(function(d){
			d.revenue = +d.revenue;
			d.stores = +d.stores;
		});

		// Store csv data in global variable
		data = csv;
  
    // Draw the visualization for the first time
		updateVisualization();
	})
    .catch(error => {
        console.log("Error loading the data");
    })
}


// Render visualization
function updateVisualization() {

    var selectedValue = d3.select("#ranking-type").property("value");

    data.sort(function(a, b) { return b[selectedValue] - a[selectedValue]; });
    x.domain(data.map(d => d.company)); 
    y.domain([0, d3.max(data, d => d[selectedValue])]);

    console.log("The dataset:", selectedValue);

    svg.selectAll(".x-axis").remove();
    svg.selectAll(".y-axis").remove();
    // Update axes
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y-axis")
        .call(yAxis);

    svg.selectAll(".bar")
        .data(data)
        .join('rect')
        .transition()
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.company); })
        .attr("y", function(d) { return y(d[selectedValue]); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d[selectedValue]); })

    var labels = d3.select('#label');
    labels.text(selectedValue);
}
