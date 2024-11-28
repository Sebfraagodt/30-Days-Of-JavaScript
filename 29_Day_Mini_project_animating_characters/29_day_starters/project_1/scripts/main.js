const textElement = document.getElementById('element');
const originalText = '30 DAYS OF JAVASCRIPT CHALLENGE 2020';

const fonts = ['Aldrich', 'Lato', 'Montserrat', 'Nunito', 'Oswald', 'Raleway', 'Raleway Dots', 'Roboto'];

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomFont() {
    return fonts[Math.floor(Math.random() * fonts.length)];
}

function createColoredText() {
    textElement.innerHTML = '';
    const randomFont = getRandomFont();
    const spanElements = originalText.split('').map((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.color = getRandomColor();
        span.style.fontFamily = randomFont;
        return span;
    });

    spanElements.forEach((span) => textElement.appendChild(span));
}

function fadeInAndOut() {
    createColoredText();
    document.body.style.backgroundColor = getRandomColor();

    setInterval(() => {
        document.body.style.backgroundColor = getRandomColor();
        textElement.style.opacity = 0;

        setTimeout(() => {
            createColoredText();
            textElement.style.opacity = 1;
        }, 1000);
    }, 4000);
}

fadeInAndOut();
