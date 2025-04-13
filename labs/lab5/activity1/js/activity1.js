console.log("Add three rectangles, four times.");


// Set SVG width and height
var width = 400,
    height = 300;


// Other constants, like padding
const scaleFactor = 8;
const barWidth = 30;
const padding = 10;

const data = [10, 20, 30];

/******* SVG 1 ********/
// SVG1: Widen each of the bars and shift accordingly
var svg1 = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height);

svg1.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'one')
    .attr('fill', '#ADD8E6')
    .attr('x', function(d,i) { return i * (barWidth + padding) + padding; })
    .attr('y', function(d) { return height - d * scaleFactor; })
    .attr('width', barWidth)
    .attr('height', function(d) { return d * scaleFactor; });

svg1.selectAll('rect')
    .transition()
    .duration(1000)
    .attr('x', function(d,i) { return i * (barWidth + barWidth + padding) + padding; })
    .attr('width', barWidth+barWidth)


/******* SVG 2 ********/
// SVG2: Make all of the vars the same height
var svg2 = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height);

svg2.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'two')
    .attr('fill', '#ADD8E6')
    .attr('x', function(d,i) { return i * (barWidth + padding) + padding; })
    .attr('y', function(d) { return height - d * scaleFactor; })
    .attr('width', barWidth)
    .attr('height', function(d) { return d * scaleFactor; });

svg2.selectAll('rect')
    .transition()
    .delay(1000)
    .duration(2000)
    .attr('y', 0)
    .attr('height', height);


/******* SVG 3 ********/
// SVG3: Change the color of the bars
var svg3 = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height);

svg3.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'three')
    .attr('fill', '#ADD8E6')
    .attr('x', function(d,i) { return i * (barWidth + padding) + padding; })
    .attr('y', function(d) { return height - d * scaleFactor; })
    .attr('width', barWidth)
    .attr('height', function(d) { return d * scaleFactor; });

svg3.selectAll('rect')
    .transition()
    .delay(3000)
    .duration(2500)
    .attr('fill', 'violet')
    .attr('stroke', 'pink')
    .attr('stroke-width', '5px');



/******* SVG 4 ********/
// SVG4: Change data of the bars
var svg4 = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height);

svg4.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'four')
    .attr('fill', '#ADD8E6')
    .attr('x', function(d,i) { return i * (barWidth + padding) + padding; })
    .attr('y', function(d) { return height - d * scaleFactor; })
    .attr('width', barWidth)
    .attr('height', function(d) { return d * scaleFactor; });

svg4.selectAll('.four')
    .data([20, 30, 40, 50, 60], (d) => d)
    .join('rect')
    .transition()
    .delay(5500)
    .duration(2000)
    .attr('class', 'four') 
    .attr('fill', '#ADD8E6') 
    .attr('x', function(d,i) { return i * (barWidth + padding) + padding; })
    .attr('y', function(d) { return height - d/2 * scaleFactor; })
    .attr('width', barWidth)
    .attr('height', function(d) { return d/2 * scaleFactor; });
