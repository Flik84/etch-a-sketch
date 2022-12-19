
// selectors
const container = document.querySelector('.container');
const gridButton = document.querySelector('.grid-button');
const colorButton = document.querySelector('.color-button')
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-number')


// functions
slider.oninput = function() {
  sliderValue.innerHTML = `${this.value} x ${this.value}`;
}

const randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const changeColor = function () {
    color = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
    return color;
}

const removeGrid = function (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Event Listeners
gridButton.addEventListener('click', function () {
    removeGrid(container);
    const gridSize = slider.value;
    if (gridSize >= 1 && gridSize <= 100) {
        for (i = 0; i < Math.pow(gridSize, 2); i++) {
            const div = document.createElement('div')
            div.classList.add('square');
            if (colorButton.classList.contains('active')) {
                div.classList.add('black');
            } else div.classList.add('white')
            const squareSizeH = (screen.width / 3.7) / (gridSize);
            const squareSizeW = 2.4 * ((screen.width / 3.7) / (gridSize));
            div.style.width = `${squareSizeW}px`;
            div.style.height = `${squareSizeH}px`;
            container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
            container.appendChild(div);
            container.style.boxShadow = '0px 0px 10px 4px';
            const containerWidth = gridSize * squareSizeW;
            container.style.width = `${containerWidth}px`;
            div.addEventListener('mouseover', function () {
            div.style.backgroundColor = changeColor(); 
            });
        }
    } else alert('Please choose a number between 1 and 100.')
});

colorButton.addEventListener('click', function() {
    colorButton.classList.toggle('active');
    const squares = document.querySelectorAll('.square');
    if (colorButton.classList.contains('active')) {
        squares.forEach(function (square) {
            if (square.classList.contains('white')) {
                square.classList.remove('white');
                square.classList.add('black');

            }
        })
    } else {
        squares.forEach(function (square) {
            if (square.classList.contains('black')) {
                square.classList.remove('black');
                square.classList.add('white');
            }
})}});






