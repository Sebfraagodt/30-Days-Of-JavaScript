const companies = new Set();
console.log(companies.size);

companies.add('Google');
companies.add('Facebook');
companies.add('Amazon');
companies.add('Oracle');
companies.add('Microsoft');
console.log(companies.size);
console.log(companies);

console.log('Level 1');
console.log('Oppgave 1 og 2');
const numberSet = new Set();
console.log(numberSet);
for (let i = 0; i <= 10; i++) {
    numberSet.add(i);
}
console.log(numberSet);

console.log('Oppgave 3');
companies.delete('Google');
console.log(companies);

console.log('Oppgave 4');
numberSet.clear();
console.log(numberSet);

console.log('Oppgave 5');
const languages = ['English', 'Finnish', 'English', 'French', 'Spanish', 'English', 'French', 'Norwegian'];
const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

console.log('Oppgave 6');
const countryMap = new Map();
const countries1 = [
    'United States',
    'Canada',
    'Mexico',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Japan',
    'Australia',
    'Brazil',
];
for (const country of countries1) {
    countryMap.set(country, country.length);
}
console.log(countryMap);

console.log('Level 2');
console.log('Oppgave 1');
const a = new Set([1, 2, 3, 4, 5]);
const b = new Set([4, 5, 6, 7, 8]);

const union = new Set([...a, ...b]);

console.log('Union:', union);

console.log('Oppgave 2');
const intersection = new Set([...a].filter((x) => b.has(x)));

console.log('Intersection:', intersection);

console.log('Oppgave 3');
const difference = new Set([...a].filter((x) => !b.has(x)));

console.log('Difference (a with b):', difference);

console.log('Level 3');
console.log('Oppgave 1');
const allLanguages = countries.flatMap((country) => country.languages);
const uniqueLanguages = new Set(allLanguages);
const numberOfUniqueLanguages = uniqueLanguages.size;
console.log(`There are ${numberOfUniqueLanguages} unique languages`);

console.log('Oppgave 2');
function mostSpokenLanguages(num) {
    const languages = countries.flatMap((country) => country.languages);
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
console.log(mostSpokenLanguages(10));
