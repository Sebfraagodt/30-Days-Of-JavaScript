function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const container = document.getElementById('numberContainer');
const amountInput = document.querySelector('input');

amountInput.addEventListener('input', (e) => {
    container.innerHTML = '';
    const amount = parseInt(amountInput.value, 10);

    for (let i = 0; i <= amount; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');

        if (isPrime(i)) {
            numberDiv.classList.add('prime');
        } else if (i % 2 === 0) {
            numberDiv.classList.add('even');
        } else {
            numberDiv.classList.add('odd');
        }

        numberDiv.textContent = i;
        container.appendChild(numberDiv);
    }
});
