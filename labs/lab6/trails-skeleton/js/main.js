
// Global objects go here (outside of any functions)
let difficultyFilter = [];
const dispatcher = d3.dispatch('filterCategories');

/**
 * Load data from CSV file asynchronously and render charts
 */

 let data, scatterplot, barchart; 

 d3.csv('data/vancouver_trails.csv')
    .then(_data => {
      data = _data; // for safety, so that we use a local copy of data.
 
      // ... data preprocessing etc. ... TODO: you add code here for numeric
      _data.forEach(function(d) {
        d.time = +d.time;
        d.distance = +d.distance;
      })

      // Initialize scales
      const colorScale = d3.scaleOrdinal()
          .domain(['Easy','Intermediate','Difficult'])
          .range(['#d3eecd', '#7bc77e', '#2a8d46']); // TODO: add an ordinal scale for the difficulty.
 
      scatterplot = new Scatterplot({ parentElement: '#scatterplot', colorScale: colorScale }, data); //we will update config soon
      scatterplot.updateVis();
 
      //barchart = new Barchart({ parentElement: '#barchart', colorScale: colorScale }, data);
      barchart = new Barchart({
        parentElement: '#barchart', colorScale: colorScale
      }, dispatcher, data);
      barchart.updateVis();
    })
   .catch(error => console.error(error));

/**
 * Use bar chart as filter and update scatter plot accordingly
 */
//  function filterData() {
//   if (difficultyFilter.length == 0) {
//       scatterplot.data = data;
//    } else {
//        scatterplot.data = data.filter(d =>
// difficultyFilter.includes(d.difficulty));
//    }
//    scatterplot.updateVis();
// }
dispatcher.on('filterCategories', selectedCategories => {
	if (selectedCategories.length == 0) {
		scatterplot.data = data;
	} else {
		scatterplot.data = data.filter(d => selectedCategories.includes(d.difficulty));
	}
	scatterplot.updateVis();
});



/*
d3.selectAll('.legend-btn').on('click', function() {
  // Toggle 'inactive' class
  d3.select(this).classed('inactive', !d3.select(this).classed('inactive'));
  
  // Check which categories are active
  let selectedDifficulty = [];
  d3.selectAll('.legend-btn:not(.inactive)').each(function() {
    selectedDifficulty.push(d3.select(this).attr('data-difficulty'));
  });

  // Filter data accordingly and update vis
  scatterplot.data = data.filter(d => selectedDifficulty.includes(d.difficulty));
  scatterplot.updateVis();
});
*/