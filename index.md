

#### Welcome to my Data Visualization portfolio. Below is a link to my final project where a classmate and I mapped every Rubik's Cube European Competition from 1982 to 2021. Then, I showcase my labs for the course. As I learned more about JavaScript, CSS, and HTML, you can see my visualizations improved. 

<style>
  .viz-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    text-align: center;
  }
  .viz-item {
    position: relative;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    transition: transform 0.2s ease;
  }
  .viz-item:hover {
    transform: scale(1.03);
  }
  .viz-img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
  .viz-title {
    margin-top: 10px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
    display: inline-block;
  }
  .viz-title:hover {
    text-decoration: underline;
  }

  .star-badge {
    position: absolute;
    bottom: 8px;
    left: 8px;
    background: gold;
    color: white;
    padding: 3px 6px;
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    z-index: 10;
  }
</style>

<div class="viz-grid">

  <div class="viz-item">
    <div class="star-badge" title="Featured Project">★</div>
    <a href="final/index.html">
      <img src="assets/rubik.png" alt="Visualization 1" class="viz-img">
      <div class="viz-title">Rubik's Cube Competitions</div>
    </a>
  </div>

  <div class="viz-item">
    <a href="labs/lab7/index.html">
      <img src="assets/graph.png" alt="Visualization 8" class="viz-img">
      <div class="viz-title">Variety of Visualizations</div>
    </a>
  </div>

  <div class="viz-item">
    <a href="labs/lab6/stock-skeleton/index.html">
      <img src="assets/sp.png" alt="Visualization 7" class="viz-img">
      <div class="viz-title">S&P 500 Index</div>
    </a>
  </div>

  <div class="viz-item">
    <a href="labs/lab6/trails-skeleton/index.html">
      <img src="assets/trails.png" alt="Visualization 7" class="viz-img">
      <div class="viz-title">Vancouver Trails</div>
    </a>
  </div>

  <div class="viz-item">
    <a href="labs/lab4/activity2/activity2.html">
      <img src="assets/coffee.png" alt="Visualization 5" class="viz-img">
      <div class="viz-title">Coffee House Chains</div>
    </a>
  </div>

  <div class="viz-item">
    <a href="labs/lab4/activity1/activity1.html">
      <img src="assets/queue.png" alt="Visualization 5" class="viz-img">
      <div class="viz-title">Coffee Shop Queue Simulation</div>
    </a>
  </div>

  <div class="viz-item">
    <a href="labs/lab5/activity2/tree.html">
      <img src="assets/tree.png" alt="Visualization 6" class="viz-img">
      <div class="viz-title">Family Tree</div>
    </a>
  </div>

  <div class="viz-item">
    <a href="labs/lab5/activity1/extra.html">
      <img src="assets/user.png" alt="Visualization 6" class="viz-img">
      <div class="viz-title">User Input</div>
    </a>
  </div>

  <div class="viz-item">
    <a href="labs/lab5/activity1/transitions.html">
      <img src="assets/transition.png" alt="Visualization 6" class="viz-img">
      <div class="viz-title">Transitions</div>
    </a>
  </div>

  <div class="viz-item">
    <a href="labs/lab2/index.html">
      <img src="assets/eu.png" alt="Visualization 3" class="viz-img">
      <div class="viz-title">Cities in the EU</div>
    </a>
  </div>

  <div class="viz-item">
    <a href="labs/lab3/index.html">
      <img src="assets/sales.png" alt="Visualization 4" class="viz-img">
      <div class="viz-title">Bar Charts</div>
    </a>
  </div>

</div>

