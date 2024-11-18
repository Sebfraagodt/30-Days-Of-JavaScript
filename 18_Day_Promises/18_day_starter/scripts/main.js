// const doSomething = (callback) => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS'];
//         callback('It did not go well', skills);
//     }, 2000);
// };

// const { languages } = require('eslint-plugin-prettier');

// const callback = (err, result) => {
//     if (err) {
//         return console.log(err);
//     }
//     return console.log(result);
// };

// doSomething(callback);

// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS'];
//         if (skills.length > 0) {
//             resolve(skills);
//         } else {
//             reject('Something wrong has happened');
//         }
//     }, 2000);
// });

// doPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => console.log(error));

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const countries = await response.json();
        return countries;
    } catch (err) {
        console.error(err);
    }
};
console.log('===== async and await');
// oppgaver level 1 og 3.2/3
(async () => {
    const result = await fetchData('https://restcountries.com/v2/all');
    result.forEach(({ name, capital, languages, population, area }) => {
        console.log({ name, capital, languages, population, area });
    });
    const biggestCountries = result.sort((a, b) => b.area - a.area);
    console.log(biggestCountries.slice(0, 10));
    const totalLanguages = new Set(result.flatMap(({ languages }) => languages).map(({ name }) => name));
    console.log(totalLanguages.size);
})();

// oppgave level 2
// (async () => {
//     const result = await fetchData('https://api.thecatapi.com/v1/breeds');
//     console.log(result);
//     result.forEach(({ name }) => {
//         console.log(name);
//     });
//     const sumWeightLow = result.reduce((sum, current) => {
//         return sum + parseInt(current.weight.metric[0]);
//     }, 0);
//     const sumWeightHigh = result.reduce((sum, current) => {
//         return sum + parseInt(current.weight.metric.slice(-1));
//     }, 0);
//     const weight = (sumWeightHigh + sumWeightLow) / 2;
//     console.log(weight);
//     const averageWeight = weight / result.length;
//     console.log(`average weight of the cats are ${averageWeight.toFixed(2)}kg`);
// })();
