const technologies = document.getElementById('technologies');
const technologiesList = ['html', 'css', 'Javascript'];
const dynamic = document.getElementById('dynamicContent');
const content = ['Programmer', 'Educator', 'Motivational Speaker', 'Motivator', 'Content creator'];
const colorArray = ['#3364ff', '#ff5733', '#64ff33'];
let currentIndex1 = 0;
let currentIndex2 = 0;

function changeDynamicContent() {
    dynamic.innerHTML = content[currentIndex1];
    currentIndex1 = (currentIndex1 + 1) % content.length;
}

function switchTechnologies() {
    technologies.innerHTML = `<span style="color: ${colorArray[currentIndex2]}">${technologiesList[currentIndex2]}</span>`;
    currentIndex2 = (currentIndex2 + 1) % technologiesList.length;
}

changeDynamicContent();
switchTechnologies();
setInterval(changeDynamicContent, 4000);
setInterval(switchTechnologies, 4000);
