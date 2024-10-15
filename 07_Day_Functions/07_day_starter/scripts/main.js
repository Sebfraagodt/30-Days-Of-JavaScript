console.log(countries);
function helloFunction() {
    console.log('Hello World');
}
helloFunction();

console.log('Level 1');
console.log('Oppgave 1');
function fullName(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
    return fullName;
}
console.log(fullName('Sebastian', 'frå'));

console.log('Oppgave 2');
// done above

console.log('Oppgave 3');
function addNumbers(numOne, numTwo) {
    const sum = numOne + numTwo;
    return sum;
}
console.log(addNumbers(10, 20));

console.log('Oppgave 4');
const areaOfRectangle = (length, width) => {
    const area = length * width;
    return `the area of the rectangle is ${area}`;
};
console.log(areaOfRectangle(10, 50));

console.log('Oppgave 5');
const perimeterOfRectangle = (length, width) => {
    const perimeter = (length + width) * 2;
    return `the perimeter of the rectangle is ${perimeter}`;
};
console.log(perimeterOfRectangle(10, 50));

console.log('Oppgave 6');
const volumeOfRectPrism = (length, width, height) => {
    const volume = length * width * height;
    return `the volume of the rectangular prism is ${volume}`;
};
console.log(volumeOfRectPrism(5, 10, 1));

console.log('Oppgave 7');
const areaOfCircle = (r) => {
    const area = Math.PI * r * r;
    return `the area of the circle is ${area}`;
};
console.log(areaOfCircle(8));

console.log('Oppgave 8');
const circumferenceOfCircle = (r) => {
    const circumference = 2 * Math.PI * r;
    return `the circumference of the circle is ${circumference}`;
};
console.log(circumferenceOfCircle(8));

console.log('Oppgave 9');
const densityOfSubstance = (mass, volume) => {
    const density = mass / volume;
    return `the density of the substance is ${density}`;
};
console.log(densityOfSubstance(10, 5));

console.log('Oppgave 10');
const calculatedSpeed = (distance, time) => {
    const speed = distance / time;
    return `the speed is ${speed}`;
};
console.log(calculatedSpeed(10, 0.5));

console.log('Oppgave 11');
const calculatedWeight = (mass, gravity) => {
    const weight = mass * gravity;
    return `the weight of the object is ${weight}`;
};
console.log(calculatedWeight(100, 0.5));

console.log('Oppgave 12');
const convertCelsiusToFahrenheit = (oC) => {
    const oF = (oC * 9) / 5 + 32;
    return `the temperature in fahrenheit is ${oF}`;
};
console.log(convertCelsiusToFahrenheit(22));

console.log('Oppgave 13');
const calculateBMI = (weight, height) => {
    const BMI = weight / (height * height);
    return BMI;
};
console.log(calculateBMI(60, 1.88));

let weightGroup;
if (calculateBMI(60, 1.88) < 18.5) {
    weightGroup = 'underweight';
} else if (calculateBMI(60, 1.88) < 25) {
    weightGroup = 'Normal weight';
} else if (calculateBMI(60, 1.88) < 30) {
    weightGroup = 'Overweight';
} else {
    weightGroup = 'Obese';
}
console.log(weightGroup);

console.log('Oppgave 14');
const checkSeason = (month) => {
    let season;
    if (month === 12 || month < 3) {
        season = 'Winter';
    } else if (month < 6) {
        season = 'Spring';
    } else if (month < 9) {
        season = 'Summer';
    } else {
        season = 'Autumn/Fall';
    }
    return season;
};
console.log(checkSeason(8));

console.log('Oppgave 15');
const findMax = (a, b, c) => {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
};
console.log(findMax(1, 2, 3));

console.log('\n');
console.log('Level 2');
console.log('Oppgave 1');
const solveLinEquation = (a, b, c, x, y) => {
    const equation = a * x + b * y + c;
    return `The result of the equation is: ${equation}`;
};
console.log(solveLinEquation(2, 2, 2, 2, 5));

console.log('Oppgave 2');
const solveQuadraticEquation = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
    const roots = [];
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b + Math.sqrt(discriminant)) / (2 * a);
        roots.push(root1, root2);
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        roots.push(root);
    } else {
        roots.push('No real roots');
    }
    return roots;
};
console.log(solveQuadraticEquation(1, 4, 4));

console.log('Oppgave 3');
const array3 = ['Monday', 'Tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const printArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
printArray(array3);

console.log('Oppgave 4');
const showDateTime = () => {
    const date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    const year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();

    month = (month < 10 ? '0' : '') + month;
    day = (day < 10 ? '0' : '') + day;
    hour = (hour < 10 ? '0' : '') + hour;
    minute = (minute < 10 ? '0' : '') + minute;

    return `${month}/${day}/${year} ${hour}:${minute}`;
};
console.log(showDateTime());

console.log('Oppgave 5');
const swapValues = (x, y) => {
    [x, y] = [y, x];
    return [x, y];
};
console.log(swapValues(5, 10));

console.log('Oppgave 6');
const array6 = ['Monday', 'Tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const reverseArray = (input) => {
    return input.slice().reverse();
};
console.log(reverseArray(array6));

console.log('Oppgave 7');
const array7 = ['Monday', 'Tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
function capitalizeArray(array) {
    return array.map((string) => string.toUpperCase());
}
console.log(capitalizeArray(array7));

console.log('Oppgave 8');
const array8 = ['Monday', 'Tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
function addItem(item) {
    return array8.push(item);
}
addItem('test');
console.log(array8);

console.log('Oppgave 9');
const array9 = ['Monday', 'Tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
function removeItem(index) {
    const start = array9.slice(0, index);
    const end = array9.slice(index + 1);
    return start.concat(end);
}
console.log(removeItem(4));

console.log('Oppgave 10');
function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(4));

console.log('Oppgave 11');
function sumOfOdds(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfOdds(10));

console.log('Oppgave 12');
function sumOfEven(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfEven(10));

console.log('Oppgave 13');
function evensAndOdds(n) {
    let countEvens = 0;
    let countOdds = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            countEvens++;
        } else {
            countOdds++;
        }
    }
    console.log(`The number of odds are ${countOdds}.`);
    console.log(`The number of evens are ${countEvens}.`);
}
evensAndOdds(11);

console.log('Oppgave 14');
const sum = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
};
console.log(sum(1, 2, 30, 55));

console.log('Oppgave 15');
function randomUserIp() {
    const ipParts = [];
    for (let i = 0; i < 4; i++) {
        ipParts.push(Math.floor(Math.random() * 256));
    }
    return ipParts.join('.');
}
console.log(randomUserIp());

console.log('Oppgave 16');
function randomMacAddress() {
    const macParts = [];
    for (let i = 0; i < 6; i++) {
        macParts.push(
            Math.floor(Math.random() * 256)
                .toString(16)
                .padStart(2, '0')
                .toUpperCase()
        );
    }
    return macParts.join(':');
}
console.log(randomMacAddress());

console.log('Oppgave 17');
function randomHexaNumberGenerator(length) {
    let hexaNumber = '#';
    for (let i = 0; i < length; i++) {
        const randomHexa = Math.floor(Math.random() * 16)
            .toString(16)
            .toUpperCase();
        hexaNumber += randomHexa;
    }
    return hexaNumber;
}
console.log(randomHexaNumberGenerator(6));

console.log('Oppgave 18');
function userIdGenerator() {
    let userId = '';
    for (let i = 0; i < 7; i++) {
        const randomChar = Math.floor(Math.random() * 36)
            .toString(36)
            .toUpperCase();
        userId += randomChar;
    }
    return userId;
}
console.log(userIdGenerator());

console.log('\n');
console.log('Level 3');
console.log('Oppgave 1');
// function userIdGeneratedByUser() {
//     const numChars = parseInt(prompt('Enter the number of characters for each ID: '));
//     const numIds = parseInt(prompt('Enter the number of IDs to generate: '));
//     for (let i = 0; i < numIds; i++) {
//         let userId = '';
//         for (let j = 0; j < numChars; j++) {
//             const randomChar = Math.floor(Math.random() * 36)
//                 .toString(36)
//                 .toUpperCase();
//             userId += randomChar;
//         }
//         console.log(`Generated ID ${i + 1}: ${userId}`);
//     }
// }
// console.log(userIdGeneratedByUser(6));

console.log('Oppgave 2');
function rgbColorGenerator() {
    let rgbColor = '';
    const rgbValues = [];
    for (let i = 0; i < 3; i++) {
        const randomRgb = Math.floor(Math.random() * 256).toString(10);
        rgbValues.push(randomRgb);
    }
    rgbColor = rgbValues.join(',');
    return `rgb color: ${rgbColor}`;
}
console.log(rgbColorGenerator());

console.log('Oppgave 3');
function arrayOfHexaColors(numColors) {
    const hexColors = [];
    for (let i = 0; i < numColors; i++) {
        let hexColor = '#';
        for (let j = 0; j < 6; j++) {
            const randomHex = Math.floor(Math.random() * 16)
                .toString(16)
                .toUpperCase();
            hexColor += randomHex;
        }
        hexColors.push(hexColor);
    }
    return hexColors;
}
console.log(arrayOfHexaColors(4));

console.log('Oppgave 4');
function arrayOfRgbColor(numColors) {
    const rgbColors = [];
    for (let i = 0; i < numColors; i++) {
        const rgbValues = [];
        let rgbColor = '';
        for (let i = 0; i < 3; i++) {
            const randomRgb = Math.floor(Math.random() * 256).toString(10);
            rgbValues.push(randomRgb);
        }
        rgbColor = rgbValues.join(',');
        rgbColors.push(rgbColor);
    }
    return rgbColors;
}
console.log(arrayOfRgbColor(5));

console.log('Oppgave 5'); //review oppgave
function convertHexaToRbg(hexColor) {
    hexColor = hexColor.replace(/^#/, '');
    let r, g, b;
    for (let i = 0; i < 6; i += 2) {
        const hexComponent = hexColor.substring(i, i + 2);
        if (i === 0) {
            r = parseInt(hexComponent, 16);
        } else if (i === 2) {
            g = parseInt(hexComponent, 16);
        } else {
            b = parseInt(hexComponent, 16);
        }
    }
    return `rgb(${r}, ${g}, ${b})`;
}
console.log(convertHexaToRbg('#4B92F6'));

console.log('Oppgave 6');
function convertRgbToHexa(rgbColor) {
    rgbColor = rgbColor.replace(/^rgb\(|\)$/g, '');
    const rgbComponents = rgbColor.split(',').map((component) => parseInt(component.trim()));
    let hexColor = '#';
    for (const component of rgbComponents) {
        let hexComponent = component.toString(16).toUpperCase();
        if (hexComponent.length === 1) {
            hexComponent = '0' + hexComponent;
        }
        hexColor += hexComponent;
    }
    return hexColor;
}
console.log(convertRgbToHexa('rgb(75, 146, 246)'));

console.log('Oppgave 7');
function generateColors(type, num) {
    const colors = [];
    for (let i = 0; i < num; i++)
        if (type === 'hex') {
            const randomColor =
                '#' +
                Math.floor(Math.random() * 16777215)
                    .toString(16)
                    .padStart(6, '0')
                    .toUpperCase();
            colors.push(randomColor);
        } else if (type === 'rgb') {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            const randomColor = `rgb(${r}, ${g}, ${b})`;
            colors.push(randomColor);
        } else {
            throw new Error("Invalid format. Please use 'hex' or 'rgb'.");
        }
    return colors;
}
console.log(generateColors('hex', 3));

console.log('Oppgave 8');
// const array38 = ['item1', 'item2', 'item3', 'iten4', 'item5'];
const array38 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function shuffleArray() {
    for (let i = array38.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array38[i], array38[j]] = [array38[j], array38[i]];
    }
    return array38;
}
console.log(shuffleArray());

console.log('Oppgave 9');
function factorial(n) {
    if (n < 0) {
        return -1;
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}
console.log(factorial(4));

console.log('Oppgave 10');
const isEmpty = (...args) => {
    return args.length === 0;
};
console.log(isEmpty());

console.log('Oppgave 11');
// done obove level 2.14

console.log('Oppgave 12');
const array312 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function sumOfArrayItems(array) {
    if (!array.every(Number.isFinite)) {
        return 'Error: All array items must be numbers';
    }
    const sum = array.reduce((a, b) => a + b, 0);
    return sum;
}
console.log(sumOfArrayItems(array312));

console.log('Oppgave 13');
const array313 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function average(array) {
    if (!array.every(Number.isFinite)) {
        return 'Error: All array items must be numbers';
    }
    const sum = array.reduce((a, b) => a + b, 0);
    const avg = sum / array.length;
    return avg;
}
console.log(average(array313));

console.log('Oppgave 14');
const array314 = ['item1', 'item2', 'item3', 'iten4', 'item5'];
function modifyArray(array) {
    if (array.length < 5) {
        return 'Error: Array must have at least 5 items';
    }
    array[4] = array[4].toUpperCase();
    return array;
}
console.log(modifyArray(array314));

console.log('Oppgave 15');
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(13));

console.log('Oppgave 16');
const array316 = ['item1', 'item2', 'item3', 'iten4', 'item5'];
function isUnique(array) {
    const uniqueSet = new Set(array);
    return uniqueSet.size === array.length;
}
console.log(isUnique(array316));

console.log('Oppgave 17');
const array317 = ['item1', 'item2', 'item3', 'iten4', 'item5'];
function isSameDataType(array) {
    if (array.length === 0) {
        return true;
    }
    const dataType = typeof array[0];
    return array.every((item) => typeof item === dataType);
}
console.log(isSameDataType(array317));

console.log('Oppgave 18');
function isValidVariable(variableName) {
    if (typeof variableName !== 'string') {
        return false;
    }
    const regex = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    return regex.test(variableName);
}
console.log(isValidVariable('Isthisvalid$_'));

console.log('Oppgave 19');
function generateUniqueRandomNumbers() {
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < 7) {
        const randomNumber = Math.floor(Math.random() * 10);
        uniqueNumbers.add(randomNumber);
    }
    return Array.from(uniqueNumbers);
}
console.log(generateUniqueRandomNumbers());

console.log('Oppgave 20');
function reverseCountries(countries) {
    const copiedArray = [...countries];
    return copiedArray.reverse();
}
console.log(reverseCountries(countries));
