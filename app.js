const container =  document.getElementById('grid-container');

for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add("grid-item");
    container.appendChild(div);
    
};