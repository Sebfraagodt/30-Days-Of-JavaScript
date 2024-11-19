const firstParagraph = document.querySelector('p');
console.log(firstParagraph);

const secondParagraph = document.querySelector('#secondParagraph');
const thirdParagraph = document.querySelector('#thirdParagraph');
const fourthParagraph = document.querySelector('#fourthParagraph');

console.log(secondParagraph);
console.log(thirdParagraph);
console.log(fourthParagraph);

const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

allParagraphs.forEach((paragraph) => {
    console.log(paragraph.textContent);
});

fourthParagraph.textContent = 'This is the fourth paragraph';
console.log(fourthParagraph);

firstParagraph.setAttribute('class', 'title');
secondParagraph.className = 'title';
thirdParagraph.id = 'third';
fourthParagraph.classList.add('title', 'header');

//level 2
firstParagraph.style.fontFamily = 'Impact,Charcoal,sans-serif';
firstParagraph.style.fontSize = '36px';
firstParagraph.style.color = 'blue';
secondParagraph.style.textDecoration = 'underline';
secondParagraph.style.fontStyle = 'italic';
thirdParagraph.style.fontFamily = 'Arial, sans-serif';
thirdParagraph.style.fontSize = '24px';
thirdParagraph.style.fontWeight = 'bold';
fourthParagraph.style.textAlign = 'center';

allParagraphs.forEach((paragraph, index) => {
    if (index === 0 || index === 2) {
        paragraph.style.color = 'green';
    } else if (index === 1 || index === 3) {
        paragraph.style.color = 'red';
    }
});

firstParagraph.textContent = 'This is the first paragraph';
firstParagraph.id = 'first';
firstParagraph.className = 'first-class';

secondParagraph.textContent = 'This is the second paragraph';
secondParagraph.id = 'second';
secondParagraph.className = 'second-class';

thirdParagraph.textContent = 'This is the third paragraph';
thirdParagraph.id = 'third';
thirdParagraph.className = 'third-class';

fourthParagraph.textContent = 'This is the fourth paragraph';
fourthParagraph.id = 'fourth';
fourthParagraph.className = 'fourth-class';

//level 3
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.textAlign = 'center';
document.body.style.margin = '0';
document.body.style.padding = '20px';

const wrapper = document.querySelector('.wrapper');
wrapper.style.display = 'inline-block';
wrapper.style.border = '1px solid #ccc';
wrapper.style.padding = '20px';
wrapper.style.borderRadius = '10px';
wrapper.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
const list = wrapper.querySelector('ul');
list.style.listStyleType = 'none';
list.style.marginBlock = '0';
list.style.paddingInline = '0';

const daysHeader = document.getElementById('30days');
daysHeader.style.fontSize = '24px';
daysHeader.style.fontWeight = 'bold';
daysHeader.style.textDecoration = 'underline';

const completedChallenges = document.querySelectorAll('.completed');
completedChallenges.forEach((item) => {
    item.style.backgroundColor = 'green';
    item.style.color = 'white';
    item.style.padding = '10px';
    item.style.borderRadius = '5px';
    item.style.margin = '10px';
});

const ongoingChallenges = document.querySelectorAll('.ongoing');
ongoingChallenges.forEach((item) => {
    item.style.backgroundColor = 'yellow';
    item.style.padding = '10px';
    item.style.borderRadius = '5px';
    item.style.margin = '10px';
});

const comingChallenges = document.querySelectorAll('.coming');
comingChallenges.forEach((item) => {
    item.style.backgroundColor = 'red';
    item.style.color = 'white';
    item.style.padding = '10px';
    item.style.borderRadius = '5px';
    item.style.margin = '10px';
});

const dateTimeElement = document.querySelector('.date-time');
dateTimeElement.style.padding = '10px';
dateTimeElement.style.display = 'inline-block';
dateTimeElement.style.margin = '0 auto';
dateTimeElement.style.borderRadius = '5px';

const colors = ['#c90000', '#fff400', '#0004ff', '#e11d1d', '#6c0bd2', '#76f612'];

function updateDateTime() {
    const now = new Date();
    dateTimeElement.textContent = now.toLocaleString();
}

function changeDateTimeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    dateTimeElement.style.backgroundColor = randomColor;
}

const yearElement = document.getElementById('year');
yearElement.style.fontSize = '81px';
const colorsYear = ['red', 'blue', 'green', 'orange', 'purple', 'pink'];

function changeYearColor() {
    const randomColor = colorsYear[Math.floor(Math.random() * colorsYear.length)];
    yearElement.style.color = randomColor;
}

setInterval(() => {
    updateDateTime();
    changeDateTimeBackgroundColor();
}, 1000);

setInterval(changeYearColor, 1000);
