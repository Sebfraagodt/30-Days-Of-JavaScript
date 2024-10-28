console.log('Level 1');
const countriesS = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const countries = [
    'Austria',
    'Belgium',
    'Denmark',
    'Finland',
    'France',
    'Germany',
    'Iceland',
    'Ireland',
    'Italy',
    'Netherlands',
    'Norway',
    'Portugal',
    'Spain',
    'Sweden',
    'Switzerland',
];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

console.log('Oppgave 1');
console.log(
    '\x1b[1mforEach\x1b[0m: funksjon som går gjennom ett array og gjør en gitt handling for hvert enkelt element i arrayet. går gjennom uten å lage nytt array'
);
console.log(
    '\x1b[1mmap\x1b[0m: lager ett nytt array ut av ett eksisterende array. du  kan gi det nye arrayet egenskaper som blir gitt samtidig som map funksjonen'
);
console.log(
    '\x1b[1mfilter\x1b[0m: lager ett nytt array med alle elementene som matcher egenskapene gitt av funksjonen. filtrerer ut alt annet'
);
console.log('\x1b[1mreduce\x1b[0m: kombinerer elementer i ett array og gir kun en verdi i retur');

console.log('Oppgave 2');
const callbackFunction = (el, i) => {
    console.log(el);
    console.log(i);
    return el;
};

names.forEach(callbackFunction);

console.log('Oppgave 3');
countries.forEach((country) => console.log(country));

console.log('Oppgave 4');
names.forEach((name) => console.log(name));

console.log('Oppgave 5');
numbers.forEach((number) => console.log(number));

console.log('Oppgave 6');
const uppercaseCountries = countries.map((country) => country.toUpperCase());
console.log(uppercaseCountries);

console.log('Oppgave 7');
const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

console.log('Oppgave 8');
const squaredNumbers = numbers.map((num) => num ** 2);
console.log(squaredNumbers);

console.log('Oppgave 9');
const upperCaseNames = names.map((name) => name.toUpperCase());
console.log(upperCaseNames);

console.log('Oppgave 10');
const productPrices = products.map((product) => (typeof product.price === 'number' ? product.price : 0));
console.log(productPrices);

console.log('Oppgave 11');
const countriesWithLand = countries.filter((country) => country.includes('land'));
console.log(countriesWithLand);

console.log('Oppgave 12');
const sixCharacterCountries = countries.filter((country) => country.length === 6);
console.log(sixCharacterCountries);

console.log('Oppgave 13');
const countriesWithSixOrMoreLetters = countries.filter((country) => country.length >= 6);
console.log(countriesWithSixOrMoreLetters);

console.log('Oppgave 14');
const countriesStartingWithE = countries.filter((country) => country.toLowerCase().startsWith('n'));
console.log(countriesStartingWithE);

console.log('Oppgave 15');
const validPrices = products.filter((product) => {
    if (typeof product.price === 'number') {
        return product;
    }
});
console.log(validPrices);

console.log('Oppgave 16');
const getStringLists = (arr) => arr.filter((item) => typeof item === 'string');
console.log(getStringLists([1, 2, 'hej', 3, 'hei']));

console.log('Oppgave 17');
const totalSum = numbers.reduce((acc, current) => acc + current, 0);
console.log(totalSum);

console.log('Oppgave 18');
const countriesSentence = countriesS.reduce((acc, current, index) => {
    return index === countriesS.length - 1 ? acc + current + ' are north European countries' : acc + current + ', ';
}, 'Estonia, ');
console.log(countriesSentence);

console.log('Oppgave 19');
console.log('\x1b[1msome\x1b[0m: tester kun ett element i ett array om det oppfyller kravene gitt i funksjonen');
console.log('\x1b[1mevery\x1b[0m: tester alle elementer i et array om de oppfyller kravene gitt i funksjonen');
console.log('Oppgave 20');
const hasLongNames = names.some((name) => name.length > 7);
console.log(hasLongNames);

console.log('Oppgave 21');
const allCountriesContainLand = countries.every((country) => country.includes('land'));
console.log(allCountriesContainLand);

console.log('Oppgave 22');
console.log('\x1b[1mfind\x1b[0m: returnerer verdien til første elementet som oppfyller kravene til funksjonen');
console.log('\x1b[1mfindIndex\x1b[0m: returnerer indeksen til første elementet som oppfyller kravene til funksjonen');

console.log('Oppgave 23');
const firstSixLetterCountry = countries.find((country) => country.length === 6);
console.log(firstSixLetterCountry);

console.log('Oppgave 24');
const firstSixLetterCountryIndex = countries.findIndex((country) => country.length === 6);
console.log(firstSixLetterCountryIndex);

console.log('Oppgave 25');
const norwayIndex = countries.findIndex((country) => country === 'Norway');
console.log(norwayIndex);

console.log('Oppgave 26');
const russiaIndex = countries.findIndex((country) => country === 'Russia');
console.log(russiaIndex);

console.log('\n');
console.log('Level 2');
console.log('Oppgave 1');
const totalPrice = products
    .filter((product) => product.price)
    .map((product) => Number(product.price))
    .reduce((tot, current) => tot + current, 0);

console.log(totalPrice);

console.log('Oppgave 2');
const totalPrice1 = products.reduce((tot, product) => {
    const price = Number(product.price);
    return tot + (price || 0);
}, 0);

console.log(totalPrice1);

console.log('Oppgave 3');
const categorizeCountries = (pattern) => {
    return countries.filter((country) => country.includes(pattern));
};
console.log(categorizeCountries('land'));

console.log('Oppgave 4');
const numofCharacters = () => {
    const array = [];
    countries.forEach((country) =>
        array.push({
            name: country,
            length: country.length,
        })
    );
    return array;
};
console.log(numofCharacters());

console.log('Oppgave 5');
const getFirstTenCountries = () => {
    return countries.slice(0, 10);
};
console.log(getFirstTenCountries());

console.log('Oppgave 6');
const getLastTenCountries = () => {
    return countries.slice(-10);
};
console.log(getLastTenCountries());

console.log('Oppgave 7');
const initialLetters = countries.map((country) => country[0].toUpperCase());
const letterCounts = {};

initialLetters.forEach((letter) => (letterCounts[letter] = (letterCounts[letter] || 0) + 1));

const maxCount = Math.max(...Object.values(letterCounts));
const mostCommonInitialLetters = Object.keys(letterCounts).filter((letter) => letterCounts[letter] === maxCount);

console.log(`The most common initial letter(s) for country names are: ${mostCommonInitialLetters.join(', ')}`);
console.log(initialLetters);
console.log(letterCounts);

console.log('\n');
console.log('Level 3');
console.log('Oppgave 1');
console.log(countriesData);
console.log([...countriesData].sort((a, b) => a.capital.localeCompare(b.capital)));
console.log([...countriesData].sort((a, b) => a.population - b.population));
console.log('Oppgave 2');
function mostSpokenLanguages(num) {
    const languages = countriesData.flatMap((country) => country.languages);
    const languageCounts = languages.reduce((acc, language) => {
        if (acc[language]) {
            acc[language] = acc[language] + 1;
        } else {
            acc[language] = 1;
        }
        return acc;
    }, {});
    return Object.entries(languageCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, num)
        .map((entry) => ({ country: entry[0], count: entry[1] }));
}
console.log(mostSpokenLanguages(5));

console.log('Oppgave 3');
const mostPopulatedCountries = (num) => {
    return countriesData
        .sort((a, b) => b.population - a.population)
        .slice(0, num)
        .map((entry) => ({ country: entry.name, population: entry.population }));
};
console.log(mostPopulatedCountries(5));

console.log('Oppgave 4');
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = {
    count: () => {
        return ages.length;
    },
    sum: () => {
        return ages.reduce((acc, age) => acc + age, 0);
    },
    min: () => {
        return Math.min(...ages);
    },
    max: () => {
        return Math.max(...ages);
    },
    range: () => {
        return statistics.max() - statistics.min();
    },
    mean: () => {
        return Math.round(statistics.sum() / statistics.count());
    },
    median: () => {
        const sortedAges = [...ages].sort((a, b) => a - b);
        const half = Math.floor(sortedAges.length / 2);
        return sortedAges.length % 2 ? sortedAges[half] : (sortedAges[half - 1] + sortedAges[half]) / 2;
    },
};

console.log('Count:', statistics.count()); // 25
console.log('Sum: ', statistics.sum()); // 744
console.log('Min: ', statistics.min()); // 24
console.log('Max: ', statistics.max()); // 38
console.log('Range: ', statistics.range()); // 14
console.log('Mean: ', statistics.mean()); // 30
console.log('Median: ', statistics.median()); // 29
