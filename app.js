const container =  document.getElementById('grid-container');

for (let i = 0; i < 256; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseover", () => {
    gridItem.style.backgroundColor = "black";
});
    container.appendChild(gridItem);
};

