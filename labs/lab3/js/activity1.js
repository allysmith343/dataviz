d3.csv('data/sales.csv')
.then(data => { 

data.forEach(d => {
    d.sales = +d.sales;
})

const margin = {top: 5, right: 20, bottom: 20, left: 50};
const width = 500 - margin.left - margin.right,
	height = 140 - margin.top - margin.bottom;
const svg = d3.select('#chart').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

const max = d3.max(data, d => d.sales);

const xScale = d3.scaleLinear()
    .domain([0, max])
    .range([0,400]);

const yScale = d3.scaleBand()
    .domain(['May','June','July','August'])
    .range([0,height])
    .paddingInner(0.15);

var xAxis = d3.axisBottom(xScale)
    .ticks(6)
    .tickSizeOuter(0);

const xAxisGroup = svg.append('g')
    .attr('class', 'axis x-axis')
    .attr('transform', `translate(0, ${height})`)
    .call(xAxis);

var yAxis = d3.axisLeft(yScale)
    .tickSizeOuter(0);

const yAxisGroup = svg.append('g')
    .attr('class', 'axis y-axis')
    .call(yAxis);

svg.selectAll("rect")
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('width', d => xScale(d.sales))
    .attr('height', yScale.bandwidth)
    .attr('y', d => yScale(d.month))
    .attr('x', 0);
});