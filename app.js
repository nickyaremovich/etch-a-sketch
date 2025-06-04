let gridSize = 16;

const button = document.querySelector('button').addEventListener('click', () => {
    const userInput = prompt("Pick a number between 2 and 100.");
    if (userInput < 2 || userInput > 100)
        alert("Error. Choose a valid number.")
    else {
        userInput = gridSize
    }

});



const container = document.getElementById('grid-container');

for (let i = 0; i < 256; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseover", () => {
    gridItem.style.backgroundColor = "black";
});
    container.appendChild(gridItem);
};

