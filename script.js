const grid = document.querySelector('.container');
const sizeButton = document.querySelector('button#size');
const CONTAINER_SIZE = 900;
const DEFAULT_GRID_SIZE = 16;

sizeButton.addEventListener('click', resizeGrid);

makeGrid(DEFAULT_GRID_SIZE, CONTAINER_SIZE);

function makeGrid(gridSize, containerSize) {
    const blockSize = CONTAINER_SIZE / gridSize;

    for (let row = 0; row < gridSize; row++) {
        const row = createRow();
        grid.appendChild(row);
        for (let column = 0; column < gridSize; column++) {
            const block = createBlock(blockSize);
            row.appendChild(block);
        }
    }
}

function createRow() {
    const row = document.createElement('div');
    row.classList.add('row');
    return row;
}

function createBlock(blockSize) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.cssText = `width: ${blockSize}px; height: ${blockSize}px;`;
    block.addEventListener('mouseover', fill);
    return block;
}

function deleteGrid() {
    const rows = grid.querySelectorAll('.row');
    rows.forEach((row) => {
        const blocks = row.querySelectorAll('.block');
        blocks.forEach((block) => {
            row.removeChild(block);
        });
        grid.removeChild(row);
    });
    
}

function resizeGrid(e) {
    gridSize = getSize();
    deleteGrid(grid);
    makeGrid(gridSize, CONTAINER_SIZE);
}

function getSize() {
    do {
        inputSize = prompt("How big should your grid be?");
        isValidSize = validateSize(inputSize);
    } while (!isValidSize);
    return inputSize;
}

function validateSize(size) {
    const LOWER_LIMIT = 0;
    const UPPER_LIMIT = 100;
    const inRange = size > LOWER_LIMIT && size <= UPPER_LIMIT;

    return (inRange) ? true : () => {
        alert('Invalid size. Number must be in range: 1-100');
        return false;
    };
}

function fill(e) {
    const block = e.target;
    block.style.cssText += "background-color: black";
}
