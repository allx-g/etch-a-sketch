const container = document.querySelector('.container');

for (let row = 0; row < 16; row++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let column = 0; column < 16; column++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.addEventListener('mouseover', fill)
        row.appendChild(block);
    }
}

function fill(e) {
    const block = e.target;
    block.style.cssText = "background-color: black";
}