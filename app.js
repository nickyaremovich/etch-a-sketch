const container =  document.getElementById('grid-container');

for (let i = 0; i < 256; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add("grid-item");
    container.appendChild(gridItem);
};

gridItem.addEventListener("mouseover", () => {
    gridItem.style.backgroundColor = "black";
});