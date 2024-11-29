const content = document.getElementById('content');
const counter = document.getElementById('total-countries');
const totalSearched = document.getElementById('total-searchCountries');
const input = document.getElementById('searchBar');
const sortButton = document.getElementById('sortButton');
const scrollToGraphButton = document.getElementById('scrollToGraph');
const scrollToTopButton = document.getElementById('scrollToTop');
const nameSortButton = document.getElementById('nameSort');
const capitalSortButton = document.getElementById('capitalSort');
const populationSort = document.getElementById('populationSort');
counter.textContent = `Total countries: ${countries.length}`;

let isAscending = true;
let filterMode = 'name';

scrollToGraphButton.addEventListener('click', scrollToGraph);
function scrollToGraph() {
    document.getElementById('graphContainer').scrollIntoView({ block: 'center', behavior: 'smooth' });
}

scrollToTopButton.addEventListener('click', scrollToTop);
function scrollToTop() {
    document.getElementById('searchBar').scrollIntoView({ block: 'center', behavior: 'smooth' });
}

const renderCountries = (array) => {
    content.innerHTML = '';
    array.forEach((country) => {
        const countryElement = document.createElement('div');
        countryElement.className = 'country-card';
        countryElement.innerHTML = `<img class="countryFlag" src="${country.flag}"/> <div class="cardContent"> <span class="cardName">${country.name}</span> <span class="cardPopulation">Population: ${country.population}</span> <span class="cardCapital">Capital: ${country.capital}</span> </div> `;
        content.appendChild(countryElement);
    });
};

function addCountries() {
    input.value = '';
    if (filterMode === 'name') {
        sortByName();
    } else {
        sortByPopulation();
    }
}

function sortByName() {
    const inputText = input.value.toLowerCase();
    const filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(inputText));
    totalSearched.textContent = `Total shown countries: ${filteredCountries.length}`;

    filteredCountries.sort((a, b) => {
        return isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });

    renderCountries(filteredCountries);
}

function sortByPopulation() {
    const filteredCountries = countries.filter((country) => country.population);
    totalSearched.textContent = `Total shown countries: ${filteredCountries.length}`;

    filteredCountries.sort((b, a) => {
        return isAscending ? a.population - b.population : b.population - a.population;
    });

    renderCountries(filteredCountries);
}

function toggleSort() {
    isAscending = !isAscending;
    sortButton.textContent = isAscending ? 'Click to sort Z-A' : 'Click to sort A-Z';

    if (filterMode === 'name') {
        sortByName();
    } else {
        sortByPopulation();
    }
}

input.addEventListener('keyup', () => {
    if (filterMode === 'name') {
        sortByName();
    } else {
        sortByPopulation();
    }
});

addCountries();

nameSortButton.addEventListener('click', () => {
    input.value = '';
    filterMode = 'name';
    sortByName();
});

populationSort.addEventListener('click', () => {
    input.value = '';
    filterMode = 'population';
    sortByPopulation();
});

sortButton.addEventListener('click', toggleSort);

// graph start

function tenMostPopulatedCountries() {
    return [...countries]
        .sort((a, b) => {
            if (a.population > b.population) return -1;
            if (a.population < b.population) return 1;
            return 0;
        })
        .splice(0, 10);
}

const populatedList = tenMostPopulatedCountries();

function tenMostSpokenLanguages() {
    const languageCount = countries.reduce((acc, current) => {
        current.languages.forEach((language) => {
            if (acc[language.toLowerCase()]) {
                acc[language.toLowerCase()] += 1;
            } else {
                acc[language.toLowerCase()] = 1;
            }
        });
        return acc;
    }, {});
    const languageCountArray = [];
    for (const language in languageCount) {
        languageCountArray.push({ languageName: language, count: languageCount[language] });
    }
    return languageCountArray.sort((a, b) => b.count - a.count).slice(0, 10);
}

const languagesList = tenMostSpokenLanguages();

const totalPopulation = populatedList.reduce((acc, country) => {
    return acc + country.population;
}, 0);

document.getElementById('graphPopulationButton').addEventListener('click', () => {
    let result = '';
    for (const country of populatedList) {
        const percentage = (country.population / totalPopulation) * 250;
        result += `<div class="country">
            <div>${country.name}</div>
            <div class="bar" style="width: ${percentage}%;"></div>
            <div>${country.population}</div>
        </div>`;
    }
    document.getElementById('graphs').innerHTML = result;
});

function upperCase(languageName) {
    const firstLetter = languageName.charAt(0);
    const restOfTheString = languageName.slice(1);
    return firstLetter.toUpperCase() + restOfTheString;
}

const totalValue = languagesList.reduce((acc, curr) => {
    return (acc += curr.count);
}, 0);

document.getElementById('graphLanguagesButton').addEventListener('click', () => {
    let result = '';
    for (const language of languagesList) {
        const formattedLanguageName = upperCase(language.languageName);
        const percentage = (language.count / totalValue) * 200;
        result += `<div class="country">
            <div>${formattedLanguageName}</div>
            <div class="bar" style="width: ${percentage}%;"></div>
            <div>${language.count}</div>
        </div>`;
    }
    document.getElementById('graphs').innerHTML = result;
});
