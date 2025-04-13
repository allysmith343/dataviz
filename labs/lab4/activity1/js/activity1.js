// 3. Append an SVG drawing area for the visualization
const height = 200;
const width = 800;
const margin = {left: 10, top: 10, right: 10, bottom: 10};

var svg = d3.select('body')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom); 

    
//updateChart([5, 10, 15]);
// The function is called every time when an order comes in or an order gets processed
// The current order queue is stored in the variable 'orders'
var textLabel = svg.append('text')
    .attr('id', 'queueLabel')
    .attr('x', 10)
    .attr('y', 20)
    .attr('font-family', 'Arial')
    .attr('font-size', 16)
    .attr('fill', 'purple')
    .text('Queue Size: 0');


function updateVisualization(orders) {
    // 2. Analyze the data stream
    //console.log(orders);

    var queueSize = orders.length;
    var queueLabel = d3.select('#queueLabel');
    queueLabel.text('Queue Size: ' + queueSize);

    var circle = svg.selectAll('circle')
        .data(orders)
        .join('circle')
        .style("fill", function(d){ return d.product == "coffee" ? 'violet' : 'teal'})
        .attr('class', 'dot')
        .attr('fill', '#01829f')
        .attr('r', 20)
        .attr('cx', (d, i) => (i * 80) + 50)
        .attr('cy', 80);


    // 4. Create the dymamic visualization.
    // You should be able to reuse the code from the pre-activity
   
    

}