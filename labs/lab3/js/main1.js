d3.csv('data/sales.csv')
.then(data => { 

data.forEach(d => {
    d.sales = +d.sales;
});

const barchart = new BarChart({ parentElement: '#chart1'}, data);
barchart.updateVis();
})
.catch(error => console.error(error));