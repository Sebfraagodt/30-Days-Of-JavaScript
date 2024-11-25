document.getElementById('length').textContent = `Currently, we have ${countries_data.length} countries in the world`;

function tenMostPopulatedCountries() {
    return countries_data
        .sort((a, b) => {
            if (a.population > b.population) return -1;
            if (a.population < b.population) return 1;
            return 0;
        })
        .splice(0, 10);
}

const populatedList = tenMostPopulatedCountries();

function tenMostSpokenLanguages() {
    const languageCount = countries_data.reduce((acc, current) => {
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

document.getElementById('population').addEventListener('click', () => {
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

document.getElementById('languages').addEventListener('click', () => {
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
