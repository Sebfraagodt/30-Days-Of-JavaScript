console.log(countries);
console.log(countries[0], countries[4]);
console.log(`I live in ${countries[128]}, which is the 128 index of the countries variable`);
const Sebastian = [
    'Sebastian',
    18,
    'Software Engineer',
    'Norway',
    { country: 'Norway', city: 'Moss' },
    { skills: ['HTML', 'CSS', 'JS', 'React'] },
];
console.log(Sebastian);
console.log(`My name is ${Sebastian[0]}`);
console.log(`I am ${Sebastian[1]} years old`);
console.log(`I am a ${Sebastian[2]}`);
console.log(`I live in ${Sebastian[3]}`);
console.log(Sebastian[4]);
console.log(`I am from ${Sebastian[4].country}`);
console.log(`I live in ${Sebastian[4].city}`);
console.log(Sebastian[5].skills);
console.log(Sebastian[5].skills[0]);
console.log(Sebastian[5].skills[1], Sebastian[5].skills[2]);
console.log(Sebastian[5].skills[3]);

const companiesString = 'Facebook, Google, Microsoft, Apple, Skooler, Oracle, Amazon';
const companies = companiesString.split(',');
console.log(companies);
const indexOfSkooler = companies.indexOf(' Skooler');
const message = indexOfSkooler === -1 ? 'This company does not exist in the array' : 'This company exists in the array';
console.log(message);
console.log(`I really like the company ${companies[4]}`);
companies[4] = 'mConnect';
console.log(companies);
const indexOfmConnect = companies.indexOf('mConnect');
if (indexOfmConnect === -1) {
    console.log('This company does not exist in the array');
} else {
    console.log('This company does exist in the array');
}
companies.push('New Company');
console.log(companies);
companies.pop();
console.log(companies);
companies.reverse();
console.log(companies);
companies.reverse();
console.log(companies);
companies.sort();
console.log(companies);

console.log('Level 1'); // start oppgaver
console.log('Oppgave 1');
const emptyArray = [];
console.log('Oppgave 2');
const numArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('Oppgave 3');
console.log(numArray.length);
console.log('Oppgave 4');
const firstValue = numArray[0];
const middleIndex = Math.floor((numArray.length - 1) / 2);
const middleValue = numArray[middleIndex];
const lastValue = numArray[numArray.length - 1];
console.log(firstValue);
console.log(middleValue);
console.log(lastValue);
console.log('Oppgave 5');
const mixedDataTypes = [1, 'hello', true, null, undefined, 3.14, [1, 2, 3], { name: 'Seb', age: 18 }];
const arrayLength = mixedDataTypes.length;
console.log('Array:', mixedDataTypes);
console.log('Array Length:', arrayLength);
console.log('Oppgave 6');
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log('Oppgave 7');
console.log(itCompanies);
console.log('Oppgave 8');
console.log(itCompanies.length);
console.log('Oppgave 9');
const firstValue1 = itCompanies[0];
const middleIndex1 = Math.floor((itCompanies.length - 1) / 2);
const middleValue1 = itCompanies[middleIndex];
const lastValue1 = itCompanies[itCompanies.length - 1];
console.log(`The first company is ${firstValue1}`);
console.log(`The middle company is ${middleValue1}`);
console.log(`The last company is ${lastValue1}`);
console.log('Oppgave 10');
itCompanies.forEach((company) => {
    console.log(company);
});
console.log('Oppgave 11');
itCompanies.forEach((value) => {
    console.log(value.toUpperCase());
});
console.log('Oppgave 12');
let spaceBetween = '';
itCompanies.forEach((value, i) => {
    if (i === itCompanies.length - 1) {
        spaceBetween += `, ${value} are big IT companies`;
    } else if (i === 0) {
        spaceBetween = value;
    } else {
        spaceBetween += `, ${value}`;
    }
    console.log(value.toUpperCase());
});
console.log(spaceBetween);

console.log('Oppgave 13');
const indexOfCompany = itCompanies.indexOf('IBM');
if (indexOfCompany === -1) {
    console.log('This company does not exist in the array');
} else {
    console.log('This company does exist in the array');
}
console.log('Oppgave 14'); // jeg er helt lost
const filteredCompanies = [];
itCompanies.forEach((value) => {
    const regex = value.match(/o/g);
    if (!regex || regex.length < 2) {
        filteredCompanies.push(value);
    }
});
console.log(filteredCompanies);

console.log('Oppgave 15');
console.log(`This is a sorted list: ${itCompanies.sort()}`);
console.log('Oppgave 16');
console.log(`This is a reversed list: ${itCompanies.reverse()}`);
console.log('Oppgave 17');
console.log(`This is the first 3 in the list: ${itCompanies.slice(0, 3)}`);
console.log('Oppgave 18');
console.log(`This is the last 3 list: ${itCompanies.slice(4, 7)}`);
console.log('Oppgave 19');
const array19 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const middleIndex19 = Math.floor((array19.length - 1) / 2);
console.log(`The middle company is ${array19.slice(0, middleIndex19) + array19.slice(middleIndex19 + 1)}`);
console.log('Oppgave 20');
array19.shift();
console.log(array19);
console.log('Oppgave 21');
const array21 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const middleIndex21 = Math.floor((array21.length - 1) / 2);
array21.splice(middleIndex21, 1);
console.log(array21);
console.log('Oppgave 22');
const array22 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
array22.pop();
console.log(array22);
console.log('Oppgave 23');
const array23 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
array23.length = 0;
console.log(array23);
console.log('\n');
console.log('Level 2');
console.log('Oppgave 1');
console.log('Oppgave 2');
const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.replace(/[^\w\s]|_/g, '').split(/\s+/);
console.log(words);
console.log(words.length);
console.log('Oppgave 3');
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}
const isAllergicToHoney = true;
if (isAllergicToHoney && shoppingCart.includes('Honey')) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
}
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}
console.log(shoppingCart);

console.log('Oppgave 4');
if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
    console.log('Ethiopia added to the list');
}

console.log('Oppgave 5');
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}

console.log('Oppgave 6');
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd + ',' + backEnd;
console.log(frontEnd.concat(backEnd));

console.log('\n');
console.log('Level 3');
console.log('Oppgave 1');
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());
const min = ages[0];
const max = ages[ages.length - 1];
console.log(`The min age is ${min} and the max age is ${max}`);
function median(list) {
    const mid = Math.floor(list.length / 2);
    const sortedArr = list.sort((a, b) => a - b);

    if (list.length % 2 === 0) {
        return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    } else {
        return sortedArr[mid];
    }
}
console.log(`The median age is ${median(ages)}`);
const sum = ages.reduce((acc, current) => acc + current, 0);
const averageAge = sum / ages.length;
console.log(`The average age is ${averageAge}`);
const range = max - min;
console.log(`The range is ${range}`);

const diffMinAvg = Math.abs(min - averageAge); //abs står for absolute
const diffMaxAvg = Math.abs(max - averageAge);

console.log(`Absolute difference between min and average: ${diffMinAvg}`);
console.log(`Absolute difference between max and average: ${diffMaxAvg}`);

if (diffMinAvg > diffMaxAvg) {
    console.log('The minimum value is farther away from the average.');
} else if (diffMinAvg < diffMaxAvg) {
    console.log('The maximum value is farther away from the average.');
} else {
    console.log('Both minimum and maximum values are equally far away from the average.');
}
const firstTenCountries = countries.slice(0, 10);
console.log(`First ten countries: ${firstTenCountries}`);

console.log('Oppgave 2');
const middleIndexCountries = Math.floor(countries.length / 2);
if (countries.length % 2 === 0) {
    const middleCountry1 = countries[middleIndexCountries - 1];
    const middleCountry2 = countries[middleIndexCountries];
    console.log(`The middle countries are: ${middleCountry1} and ${middleCountry2}`);
} else {
    const middleCountry = countries[middleIndexCountries];
    console.log(`The middle country is: ${middleCountry}`);
}

console.log('Oppgave 3');
let firstHalf = [];
let secondHalf = [];

if (countries.length % 2 === 0) {
    firstHalf = countries.slice(0, middleIndexCountries);
    secondHalf = countries.slice(middleIndexCountries);
} else {
    firstHalf = countries.slice(0, middleIndexCountries + 1);
    secondHalf = countries.slice(middleIndexCountries + 1);
}
console.log(firstHalf, secondHalf);
