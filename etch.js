function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colors = [];
for (let i = 0; i < 300; i++) {
  colors.push(getRandomColor());
}

const gridContainer = document.querySelector("#gridmaster");
const selectedColoursContainer = document.getElementById("selected-colours");

function createGrid(sideLength, customColor = null) {
  // Clear grid
  gridContainer.innerHTML = "";

  const totalSquares = sideLength * sideLength;

  for (let i = 0; i < totalSquares; i++) {
    const child = document.createElement("div");
    child.id = `data${i}`;
    child.className = "squareClass";
    gridContainer.appendChild(child);

    child.addEventListener("mouseover", function () {
      child.style.background =
        customColor || colors[Math.floor(Math.random() * colors.length)];
    });
  }

  gridContainer.style.gridTemplateColumns = `repeat(${sideLength}, 1fr)`;
}

function addColourDot(colour) {
  const dot = document.createElement("div");
  dot.className = "colour-dot";
  dot.style.backgroundColor = colour;
  selectedColoursContainer.appendChild(dot);
}

function clearGrid() {
  gridContainer.innerHTML = ""; // Clear the grid
  selectedColoursContainer.innerHTML = ""; // Clear the colour dots
}

function setRandomColours() {
  createGrid(parseInt(gridSizeSlider.value));
  selectedColoursContainer.innerHTML = ""; // Clear the selected colour dots
}

const gridSizeSlider = document.getElementById("gridsize");
const colorPicker = document.getElementById("colourpicker");
const gridSizeValue = document.getElementById("gridSizeValue");
const gridSizeValue2 = document.getElementById("gridSizeValue2");
const clearGridButton = document.getElementById("clearGrid");
const randomColoursButton = document.getElementById("randomColours");

gridSizeSlider.addEventListener("input", function () {
  const sideLength = parseInt(gridSizeSlider.value);
  gridSizeValue.textContent = sideLength;
  gridSizeValue2.textContent = sideLength;
  createGrid(sideLength, colorPicker.value);
});

colorPicker.addEventListener("input", function () {
  const selectedColour = colorPicker.value;
  createGrid(parseInt(gridSizeSlider.value), selectedColour);
  addColourDot(selectedColour);
});

clearGridButton.addEventListener("click", clearGrid);
randomColoursButton.addEventListener("click", setRandomColours);

// Initialize grid
createGrid(64);
