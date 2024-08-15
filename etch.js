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

function createGrid(sideLength) {
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
        colors[Math.floor(Math.random() * colors.length)];
    });
  }

  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateColumns = `repeat(${sideLength}, 1fr)`;
}

createGrid(64);

const button = document.getElementById("gridsize");
button.addEventListener("click", function () {
  let sideLength = parseInt(
    prompt("How many squares per side would you like your grid to be?")
  );
  const maxLength = 100;

  if (isNaN(sideLength) || sideLength <= 0 || sideLength > maxLength) {
    alert(`Please enter a number between 1 and ${maxLength}`);
  } else {
    createGrid(sideLength);
  }
});
