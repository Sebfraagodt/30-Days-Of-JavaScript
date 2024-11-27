const container = document.getElementById('container');
const counter = document.getElementById('total-countries');
const sortButton = document.getElementById('sort-button');
const input = document.getElementById('input');
const allCountriesButton = document.getElementById('allCountries-button');
const startingWordButton = document.getElementById('starting-button');
const anyWordButton = document.getElementById('anyWord-button');
counter.textContent = `Total countries: ${countries.length}`;

let isAscending = true;
let filterMode = 'starting';

const renderCountries = (array) => {
    container.innerHTML = '';
    array.forEach((country) => {
        const countryElement = document.createElement('div');
        countryElement.className = 'country-card';
        countryElement.textContent = country;
        container.appendChild(countryElement);
    });
};

function addCountries() {
    input.value = '';
    countries.sort();
    if (!isAscending) {
        countries.reverse();
    }
    renderCountries(countries);
}

function startingWord() {
    const inputText = input.value.toLowerCase();
    const filteredCountries = countries.filter((country) => country.toLowerCase().startsWith(inputText));
    filteredCountries.sort();
    if (!isAscending) {
        filteredCountries.reverse();
    }
    renderCountries(filteredCountries);
}

function anyWord() {
    const inputText = input.value.toLowerCase();
    const filteredCountries = countries.filter((country) => country.toLowerCase().includes(inputText));
    filteredCountries.sort();
    if (!isAscending) {
        filteredCountries.reverse();
    }
    renderCountries(filteredCountries);
}

function toggleSort() {
    if (isAscending) {
        sortButton.textContent = ' Click to sort A-Z';
    } else {
        sortButton.textContent = 'Click to sort Z-A';
    }
    isAscending = !isAscending;
    if (filterMode === 'starting') {
        startingWord();
    } else {
        anyWord();
    }
}

input.addEventListener('keyup', () => {
    if (filterMode === 'starting') {
        startingWord();
    } else {
        anyWord();
    }
});

addCountries();
allCountriesButton.addEventListener('click', addCountries);
startingWordButton.addEventListener('click', (ev) => {
    document.querySelectorAll('button').forEach((btn) => {
        btn.classList.remove('active');
    });
    ev.currentTarget.classList.add('active');
    input.value = '';
    filterMode = 'starting';
    startingWord();
});
anyWordButton.addEventListener('click', (ev) => {
    document.querySelectorAll('button').forEach((btn) => {
        btn.classList.remove('active');
    });
    ev.currentTarget.classList.add('active');
    input.value = '';
    filterMode = 'any';
    anyWord();
});
sortButton.addEventListener('click', toggleSort);
