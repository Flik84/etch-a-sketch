const container = document.querySelector('.container');
const button = document.querySelector('button');

const randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const changeColor = function () {
    color = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
    return color;
}

function removeGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


button.addEventListener('click', function () {
    removeGrid(container);
    const gridSize = Number(prompt('Please enter number of squares per side (Max 100): '));
    if (gridSize >= 1 && gridSize <= 100) {
        for (i = 0; i < Math.pow(gridSize, 2); i++) {
            const div = document.createElement('div')
            div.classList.add('square')
            const squareSizeH = (screen.width / 3.7) / (gridSize);
            const squareSizeW = 2.4 * ((screen.width / 3.7) / (gridSize));
            div.style.width = `${squareSizeW}px`;
            div.style.height = `${squareSizeH}px`;
            container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
            container.appendChild(div);
            div.addEventListener('mouseover', function () {
                div.style.backgroundColor = changeColor(); 
            });
        }
    } else alert('Please choose a number between 1 and 100.')
});






