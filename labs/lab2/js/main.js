// Load the CSV file using D3
d3.csv('data/cities_and_population.csv')
.then(data => {
    const euCities = data.filter(city => city.eu === 'true')

    const countEuCities = euCities.length;  

    var countDiv = document.getElementById("countCities")
    var paragraph = document.createElement("p")
    paragraph.textContent = `There are ${countEuCities} cities in the EU.`
    countDiv.appendChild(paragraph)

    euCities.forEach(city => {
        city.population = +city.population
        city.x = +city.x
        city.y = +city.y
    });

    const svg = d3.select('body').append('svg')
      .attr('width', 700)
      .attr('height', 550)

    svg.selectAll('circle')
      .data(euCities)
      .enter()
      .append('circle')
      .attr('class', 'circle-style')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => d.population < 1000000 ? 5 : 10)

    svg.selectAll('text')
      .data(euCities)
      .enter()
      .append('text')
      .attr('x', d => d.x)
      .attr('y', d => d.y - 10)
      .text(d => d.city)
      .attr('class', 'city-label')
      .style('opacity', d => d.population >= 1000000 ? 1 : 0)


});
