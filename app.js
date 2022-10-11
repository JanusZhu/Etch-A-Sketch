function createGrids(n) {
  const grids = document.querySelectorAll(".grid");

  const container = document.querySelector(".container");
  container.innerHTML = "";
  for (let i = 0; i < n * n; i++) {
    const grid = document.createElement("div");
    grid.className = "grid";
    grid.setAttribute(
      "style",
      `width: ${width / n - 2}px; height: ${heigh / n - 2}px; border: solid 1px`
    );
    grid.addEventListener("mouseover", paintGrid);

    container.appendChild(grid);
  }
}

function changeGrid() {
  let number = prompt("How many grids you want for each row?");
  createGrids(number);
}

function paintGrid(e) {
  e.target.style.backgroundColor = "red";
}

const width = 500;
const heigh = 500;
createGrids(10);

console.log("Finished");
