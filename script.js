const DEFAULT_SIZE = 100;
const grid = document.querySelector(".container");
const resetBtn = document.querySelector(".reset-btn");
const optionContainer = document.querySelector(".options-container");
const optionButton = document.querySelector(".options-button");
const backgroundColorInput = document.querySelector(".fav-color");
const brushSizeInput = document.querySelector(".brush-size");

window.addEventListener("keydown", (e) => {
    if (e.key === "Shift") {
        grid.style.cursor = "grab";
    }
});

window.addEventListener("keyup", (e) => {
    grid.style.cursor = "auto";
});

optionButton.addEventListener("click", () => {
    optionButton.classList.toggle("spin");
    optionContainer.classList.toggle("active");
});


resetBtn.addEventListener("click", () => {
    createGrid(DEFAULT_SIZE);
    resetBtn.classList.toggle("pulse");
});

backgroundColorInput.addEventListener("change", (e) => {
    const backgroundColor = e.target.value;
    grid.style.backgroundColor = backgroundColor;
});

brushSizeInput.addEventListener("change", (e) => {
    const brushSize = e.target.value;
    createGrid(brushSize);
});


const random = max => Math.floor(Math.random() * Math.floor(max));

const resetGrid = grid => grid.innerHTML = "";

const createCell = size => {
    const cell = document.createElement("div");
    const cellSize = `calc(100vw / ${size})`;

    cell.style.width = cellSize;
    cell.style.height = cellSize;
    cell.classList.add("cell");

    cell.addEventListener("touchmove", (e) => {
        cell.style.backgroundColor = `rgb(${random(256)}, ${random(256)}, ${random(256)})`;
    });

    cell.addEventListener("mouseover", (e) => {
        const isLeftMouseButtonClicked = e.buttons === 1;
        const isShiftButtonPressed = e.shiftKey === true;

        if (isLeftMouseButtonClicked) {
            cell.style.backgroundColor = `rgb(${random(256)}, ${random(256)}, ${random(256)})`;
        }

        if (isLeftMouseButtonClicked && isShiftButtonPressed) {
            cell.style.backgroundColor = backgroundColorInput.value;
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

createGrid(100);
