console.log('Level 1');
console.log('Oppgave 1');
console.table(countries);

console.log('Oppgave 2');
// er det ikke det samme?

console.log('Oppgave 3');
console.group('Countries');
console.log(countries);
console.groupEnd();

console.log('Level 2');
console.log('Oppgave 1, 2 og 3');
console.assert(10 > 2 * 10, '10 is not greater than 2 * 10');
console.warn('This is a warning message: Please check your input.');
console.error('This is an error message: An unexpected error occurred.');

console.log('Level 3');
const arraySize = 1000000; // Size of the array
const testArray = new Array(arraySize).fill(0).map((_, index) => index); // Create an array with numbers from 0 to arraySize - 1

// Function to benchmark a loop
function benchmark(label, loopFunction) {
    const start = performance.now();
    loopFunction();
    const end = performance.now();
    console.log(`${label}: ${end - start} ms`);
}

// Benchmarking the different loops
benchmark('While Loop', () => {
    let i = 0;
    while (i < testArray.length) {
        const value = testArray[i];
        i++;
    }
});

benchmark('For Loop', () => {
    for (let i = 0; i < testArray.length; i++) {
        const value = testArray[i];
    }
});

benchmark('For...of Loop', () => {
    for (const value of testArray) {
        // Do nothing
    }
});

benchmark('forEach Loop', () => {
    testArray.forEach((value) => {
        // Do nothing
    });
});
