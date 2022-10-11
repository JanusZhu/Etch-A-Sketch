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
  number = prompt("How many grids you want for each row? (1-64)");

  if (!Number.isInteger(Number(number))) {
    alert("Please choose a number.");
  } else if ((Number(number) > 64) | (Number(number) <= 0)) {
    alert("Please choose a number in the right range (1-64).");
  } else {
    createGrids(Number(number));
  }
}

function resetGrid() {
  createGrids(number);
}

function paintGrid(e) {
  e.target.style.backgroundColor = "red";
}

let defaultNumber = 10;
let number = 10;
const width = 500;
const heigh = 500;
createGrids(defaultNumber);

console.log("Finished");
