const DEFAULT_SIZE = 64;
const grid = document.querySelector(".container");
const resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener("click", () => {
    const gridSize = prompt("What size do you want to be your canvas?", DEFAULT_SIZE);
    createGrid(gridSize);
});

const random = max => Math.floor(Math.random() * Math.floor(max));

const resetGrid = grid => grid.innerHTML = "";

const createCell = size => {
    const cell = document.createElement("div");
    const cellSize = `calc(100vw / ${size})`;

    cell.style.width = cellSize;
    cell.style.height = cellSize;
    cell.classList.add("cell");

    cell.addEventListener("mouseover", (e) => {
        const isLeftMouseButtonClicked = e.buttons === 1;

        if (isLeftMouseButtonClicked) {
            cell.style.backgroundColor = `rgb(${random(256)}, ${random(256)}, ${random(256)})`;
        }
    });
    grid.append(cell);
};

const createGrid = (gridSize) => {
    resetGrid(grid);
    const size = gridSize || DEFAULT_SIZE;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            createCell(size);
        };
    };
};

createGrid(16);


