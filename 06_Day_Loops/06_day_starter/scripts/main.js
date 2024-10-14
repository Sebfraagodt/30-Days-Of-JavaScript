const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
];
const countries2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
];

const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

const newArray = [];

console.log('Level 1');
console.log('Oppgave 1 og 2');

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

let i = 10;
do {
    console.log(i);
    i--;
} while (i >= 0);

console.log('Oppgave 3');
const n = 7;
for (let i = 0; i <= n; i++) {
    console.log(i);
}

console.log('Oppgave 4');
for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i));
}

console.log('Oppgave 5');
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

console.log('Oppgave 6');
console.log(`i  i^2  i^3`);
for (let i = 0; i <= 10; i++) {
    console.log(`${i}   ${i ** 2}   ${i ** 3}`);
}

console.log('Oppgave 7');
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log('Oppgave 8');
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log('Oppgave 9');
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

console.log('Oppgave 10');
let sumE = 0;
let sumO = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumE += i;
    } else {
        sumO += i;
    }
}
const totalNumbers = sumE + sumO;
console.log(`The sum of all numbers from 0 to 100 is ${totalNumbers}`);

console.log('Oppgave 11');
console.log(`the sum of all evens from 0 to 100 is ${sumE}. And the sum of all odds from 0 to 100 is ${sumO}`);

console.log('Oppgave 12');
numberArray = [sumE, sumO];
console.log(numberArray);

console.log('Oppgave 13');
for (i = 0; i < 5; i++) {
    console.log(Math.random());
}

console.log('Oppgave 14');
const randomNumbersArray = [];
while (randomNumbersArray.length < 5) {
    const randomNumber = Math.floor(Math.random() * 100);
    if (!randomNumbersArray.includes(randomNumber)) {
        randomNumbersArray.push(randomNumber);
    }
}
console.log(randomNumbersArray);

console.log('Oppgave 15');
const r = Math.random().toString(36).slice(2, 8);
console.log(r);
console.log('\n');
console.log('Level 2');
console.log('Oppgave 1');
/**
 *
 * @param {number} maxLength1
 * @returns
 */
function generateRandomId(maxLength1) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < maxLength1; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomId;
}
console.log(generateRandomId(100));

console.log('Oppgave 2');
function generateRandomHex() {
    const hexCharacters = '0123456789ABCDEF';
    let randomHex = '';
    for (let i = 0; i < 6; i++) {
        randomHex += hexCharacters.charAt(Math.floor(Math.random() * hexCharacters.length));
    }
    return randomHex;
}
console.log(`#${generateRandomHex()}`);

console.log('Oppgave 3');
function generateRandomRgb() {
    let randomRgb = 'rgb(';
    for (let i = 0; i < 3; i++) {
        const randomValue = Math.floor(Math.random() * 256);
        randomRgb += randomValue;
        if (i < 2) {
            randomRgb += ', ';
        }
    }
    randomRgb += ')';
    return randomRgb;
}
console.log(generateRandomRgb());

console.log('Oppgave 4');
for (i = 0; i < countries2.length; i++) {
    countries2[i] = countries2[i].toUpperCase();
}
console.log(countries2);

console.log('Oppgave 5');
const countryLengths = [];
countries.forEach((country) => {
    countryLengths.push(country.length);
});
console.log(countryLengths);

console.log('Oppgave 6');
const result = [];
countries.forEach((country) => {
    const countryName = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
    const countryCode = country.slice(0, 3).toUpperCase();
    const countryLength = country.length;
    result.push([countryName, countryCode, countryLength]);
});
console.log(result);

console.log('Oppgave 7');
const countriesWithLand = [];
countries.forEach((country) => {
    if (country.toLowerCase().includes('land')) {
        countriesWithLand.push(country);
    }
});
if (countriesWithLand.length === 0) console.log('All these countries are without land');
else console.log(countriesWithLand);

console.log('Oppgave 8');
const countriesWithIa = [];
countries.forEach((country) => {
    if (
        country
            .toLowerCase()
            .slice(country.length - 2)
            .includes('ia')
    ) {
        countriesWithIa.push(country);
    }
});
if (countriesWithIa.length === 0) console.log('All these countries are without ia');
else console.log(countriesWithIa);

console.log('Oppgave 9');
let longestCountry = '';
let maxLength3 = 0;

countries.forEach((country) => {
    if (country.length > maxLength3) {
        longestCountry = country;
        maxLength3 = country.length;
    }
});
console.log(`The country with the most characters is: ${longestCountry}`);

console.log('Oppgave 10');
const countriesWith5 = [];
countries.forEach((country) => {
    if (country.length === 5) countriesWith5.push(country);
});
console.log(countriesWith5);

console.log('Oppgave 11');
let longestTech = '';
let maxLength4 = 0;
webTechs.forEach((tech) => {
    if (tech.length > maxLength4) {
        longestTech = tech;
        maxLength4 = tech.length;
    }
});
console.log(`The Web Tech with the most characters is: ${longestTech}`);

console.log('Oppgave 12');
const techResults = webTechs.map((tech) => [tech, tech.length]);
console.log(techResults);

console.log('Oppgave 13');
const acronyms = mernStack.map((tech) => tech[0]).join('');
console.log(acronyms);

console.log('Oppgave 14');
for (i = 0; i < webTechs.length; i++) {
    console.log(webTechs[i]);
}

webTechs.forEach((tech) => console.log(tech));

for (const tech of webTechs) {
    console.log(tech);
}

console.log('Oppgave 15');
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
    reversedFruits.push(fruits[i]);
}
console.log(reversedFruits);

console.log('Oppgave 16');
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB'],
];

for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
        console.log(fullStack[i][j].toUpperCase());
    }
}
console.log('\n');
console.log('Level 3');
console.log('Oppgave 1');
const countriesCopy = [...countries];
console.log(countriesCopy);

console.log('Oppgave 2');
countriesCopy.sort();
console.log(countriesCopy);

console.log('Oppgave 3');
webTechs.sort();
mernStack.sort();
console.log(webTechs);
console.log(mernStack);

console.log('Oppgave 4');
//already done

console.log('Oppgave 5');
//already done

console.log('Oppgave 6');
//already done

console.log('Oppgave 7');
const countriesWith4 = countries.filter((country) => {
    if (country.length === 4) {
        return country;
    }
});
console.log(countriesWith4);

console.log('Oppgave 8');
const countriesWithMore = countries.filter((country) => {
    if (country.length >= 2) {
        return country;
    }
});
console.log(countriesWithMore);

console.log('Oppgave 9');
const reversedArray = [];
countries.reverse().forEach((c) => reversedArray.push(c.toUpperCase()));
console.log(reversedArray);
