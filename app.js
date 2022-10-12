//generate Grids
function createGrids(n) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  for (let i = 0; i < n * n; i++) {
    const grid = document.createElement("div");
    grid.className = "grid";
    grid.setAttribute(
      "style",
      `width: ${width / n - 2}px; height: ${
        heigh / n - 2
      }px; border: solid 1px #ccc`
    );
    grid.addEventListener("mouseover", paintGrid);

    container.appendChild(grid);
  }
}

//Change number of Grids
function changeGrid() {
  number = prompt("How many grids you want for each row? (1-64)");
  //check if input is integer
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
  if (randomColor) {
    e.target.style.backgroundColor = generateRBG();
  } else if (darkenColor) {
    e.target.style.backgroundColor = `rgb(${currentColorRed}, ${currentColorGreen}, ${currentColorBlue})`;
    if (currentColorRed > 0) {
      currentColorRed -= incrementRed;
      currentColorGreen -= incrementGreen;
      currentColorBlue -= incrementBlue;
    }
  } else {
    e.target.style.backgroundColor = defaultColor;
  }
}

function generateRBG() {
  return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)})`;
}

function switchRandomColor() {
  randomColor = !randomColor;
  if (darkenColor & randomColor) {
    darkenColor = !darkenColor;
  }
}

function switchDarkenColor() {
  darkenColor = !darkenColor;
  if (darkenColor & randomColor) {
    randomColor = !randomColor;
  }
  if (darkenColor) {
    currentColorRed = Math.round(Math.random() * 255);
    currentColorGreen = Math.round(Math.random() * 255);
    currentColorBlue = Math.round(Math.random() * 255);
    incrementRed = currentColorRed / 10;
    incrementGreen = currentColorGreen / 10;
    incrementBlue = currentColorBlue / 10;
  }
}
function updateColor(event) {
  defaultColor = event.target.value;
  if (randomColor) {
    randomColor = false;
  }
  if (darkenColor) {
    darkenColor = false;
  }
}

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateColor, false);
  colorWell.select();
}

let darkenColor = false;
let randomColor = false;
let defaultNumber = 30;
let colorWell;
let defaultColor = "#ff0000";

window.addEventListener("load", startup, false);

let currentColorBlue,
  currentColorRed,
  currentColorGreen,
  incrementRed,
  incrementGreen,
  incrementBlue;

let number = defaultNumber;
const width = 500;
const heigh = 500;
createGrids(defaultNumber);

console.log("Finished");
