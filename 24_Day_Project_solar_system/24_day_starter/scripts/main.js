const space = {
    mercury: {
        gravity: 0.4,
        image: 'mercury.png',
    },
    venus: {
        gravity: 0.9,
        image: 'venus.png',
    },
    earth: {
        gravity: 1.0,
        image: 'earth.png',
    },
    mars: {
        gravity: 0.4,
        image: 'mars.png',
    },
    jupiter: {
        gravity: 2.5,
        image: 'jupiter.png',
    },
    saturn: {
        gravity: 1.1,
        image: 'saturn.png',
    },
    uranus: {
        gravity: 0.9,
        image: 'uranus.png',
    },
    neptune: {
        gravity: 1.1,
        image: 'neptune.png',
    },
    pluto: {
        gravity: 0.1,
        image: 'pluto.png',
    },
};

const input = document.querySelector('input');
const select = document.querySelector('select');
const button = document.querySelector('button');
const container = document.querySelector('.container');

const containerUI = (img, text) => {
    const image = document.createElement('img');
    image.src = `images/${img}`;
    image.alt = 'planet';
    const div = document.createElement('div');
    div.textContent = text;
    div.className = 'big';
    container.appendChild(image);
    container.appendChild(div);
};

button.addEventListener('click', function () {
    container.innerHTML = '';
    const inputValue = input.value.trim();

    if (!inputValue) {
        const message = document.createElement('p');
        message.textContent = 'Mass is required';
        message.className = 'error';
        container.appendChild(message);
    } else if (!select.value) {
        const message = document.createElement('p');
        message.textContent = 'Planet is required';
        message.className = 'error';
        container.appendChild(message);
    } else {
        const imgSrc = space[select.value].image;
        const weight = (Number(inputValue) * space[select.value].gravity).toFixed(1);
        containerUI(imgSrc, `Your weight on this planet would be ${weight}kg`);
    }
});
