document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.textAlign = 'center';
document.body.style.margin = '0';
document.body.style.padding = '20px';

const wrapper = document.querySelector('.wrapper');
wrapper.style.display = 'inline-block';
wrapper.style.border = '1px solid #ccc';
wrapper.style.padding = '20px';
wrapper.style.borderRadius = '10px';
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
    item.style.display = 'flex';
    item.style.justifyContent = 'space-between';
    item.style.color = 'white';
    item.style.padding = '30px';
    item.style.margin = '10px';
});

const ongoingChallenges = document.querySelectorAll('.ongoing');
ongoingChallenges.forEach((item) => {
    item.style.backgroundColor = 'yellow';
    item.style.display = 'flex';
    item.style.justifyContent = 'space-between';
    item.style.padding = '30px';
    item.style.margin = '10px';
});

const comingChallenges = document.querySelectorAll('.coming');
comingChallenges.forEach((item) => {
    item.style.backgroundColor = 'red';
    item.style.display = 'flex';
    item.style.justifyContent = 'space-between';
    item.style.color = 'white';
    item.style.padding = '30px';
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
