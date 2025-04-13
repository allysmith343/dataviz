d3.csv('data/sales.csv')
  .then(data => {
    data.forEach(d => {
      d.sales = +d.sales;
    });

    const barchart = new BarChart({
      parentElement: '#chart1',
      containerWidth: 400,
      containerHeight: 200
    }, data);

    barchart.updateVis();
  })
  .catch(error => console.error('Error loading CSV data:', error));
