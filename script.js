const container = document.querySelector('.container');

for (let row = 0; row < 16; row++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let column = 0; column < 16; column++) {
        const block = document.createElement('div');
        block.classList.add('block');
        row.appendChild(block);
    }
}