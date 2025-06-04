const container =  document.getElementById('grid-container');
let size = 16;
let currentSize = size;


function getSize() {
    size = parseInt(prompt('Enter a number between 2 and 100'))
    if (size < 2 || size > 100) {
        alert('Not a valid number!')
        getSize();
    } else {
    currentSize = size;
    setGrid(currentSize);
    }
};

function setGrid(size) {
container.innerHTML = '';
for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add("grid-item");
    gridItem.style.width = `${400 / size}px`;
    gridItem.style.height = `${400 / size}px`;
    container.appendChild(gridItem);
    
    gridItem.addEventListener('mouseover', () => {
        gridItem.style.backgroundColor = 'black';
    });
};
};
// clear grid functionality 
function clearGrid() {
    container.innerHTML = '';
    setGrid(currentSize);
};

setGrid(size);