const container = document.getElementById('container');
console.log(container);

const counter = document.getElementById('total-countries');
counter.textContent = `Total countries: ${countries.length}`;

countries.forEach((country) => {
    const countryElement = document.createElement('div');
    countryElement.className = 'country-card';
    countryElement.textContent = country;

    container.appendChild(countryElement);
});
