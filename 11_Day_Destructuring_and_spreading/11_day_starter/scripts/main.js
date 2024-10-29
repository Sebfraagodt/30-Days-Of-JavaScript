console.log(countries);
const numbers = [1, 2, 3];
const [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree);

const names = ['Asabeneh', 'Brook', 'David', 'John'];
const [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB'],
];
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd);
console.log(backEnd);

console.log(numOne, numThree);
console.log(secondPerson, fourthPerson);

console.log('Level 1');
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries5 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60,
};
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16,
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18,
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22,
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25,
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26,
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18,
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20,
    },
];

console.log('Oppgave 1');
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi);

console.log('Oppgave 2');
const [fin, est, sw, den, nor] = countries5;
console.log(fin, nor);

console.log('Oppgave 3');
const { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);

console.log('\n');
console.log('Level 2');
console.log('Oppgave 1');
users.forEach(({ name, scores, skills, age }) => {
    console.log('Name:', name);
    console.log('Scores:', scores);
    console.log('Skills:', skills);
    console.log('Age:', age);
    console.log('---------');
});

console.log('Oppgave 2');
const usersWithLessThanTwoSkills = users.filter((user) => user.skills.length < 2);
console.log(usersWithLessThanTwoSkills);

console.log('\n');
console.log('Level 3');
console.log('Oppgave 1');
// countries.forEach(({ name, capital, population, languages }) => {
//     console.log(`Name: ${name}`);
//     console.log(`Capital: ${capital}`);
//     console.log(`Population: ${population}`);
//     console.log(`Languages: ${languages.join(', ')}`);
//     console.log('--------------------------');
// });

console.log('Oppgave 2');
const student1 = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [name, skills, scores] = student1;
const [jsScore, reactScore] = [scores[2], scores[3]];
console.log(name, skills, jsScore, reactScore);

console.log('Oppgave 3');
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
];

const convertArrayToObject = (students) => {
    return students.map(([name, skills, scores]) => ({
        name,
        skills,
        scores,
    }));
};
console.log(convertArrayToObject(students));

console.log('Oppgave 4');
const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 },
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [{ skill: 'MongoDB', level: 7.5 }],
        dataScience: ['Python', 'R', 'D3.js'],
    },
};

const newStudent = {
    ...student,
    skills: {
        ...student.skills,
        frontEnd: [...student.skills.frontEnd, { skill: 'BootStrap', level: 8 }],
        backEnd: [...student.skills.backEnd, { skill: 'Express', level: 9 }],
        dataBase: [...student.skills.dataBase, { skill: 'SQL', level: 8 }],
        dataScience: [...student.skills.dataScience, 'SQL'],
    },
};
console.log(newStudent);
