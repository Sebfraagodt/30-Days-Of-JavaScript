localStorage.setItem('firstName', 'Asabeneh');
localStorage.setItem('age', 200);
const skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 },
];
const skillsJSON = JSON.stringify(skills);
localStorage.setItem('skills', skillsJSON);
const skills1 = JSON.parse(skillsJSON);
console.log(skills1);
const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React'],
};
const userJSON = JSON.stringify(user);
localStorage.setItem('user', userJSON);
console.log(localStorage);
const firstName = localStorage.getItem('firstName');
const age = localStorage.getItem('age');
const userSkills = localStorage.getItem('skills');
console.log(firstName, age, JSON.parse(userSkills));
localStorage.clear();
console.log(localStorage);

// oppgaver level 1
// localStorage.setItem('firstName', prompt('Enter your first name here:'));
// localStorage.setItem('lastName', prompt('Enter your last name here:'));
// localStorage.setItem('age', prompt('Enter your age here:'));
// localStorage.setItem('country', prompt('Enter your country here:'));
// localStorage.setItem('city', prompt('Enter your city here:'));
// console.log(localStorage);

// oppgaver level 2
const student = {
    firstName: 'Seb',
    lastName: 'Fra',
    age: 18,
    skills: [
        { tech: 'HTML', level: 10 },
        { tech: 'CSS', level: 9 },
        { tech: 'JS', level: 8 },
        { tech: 'React', level: 9 },
        { tech: 'Redux', level: 10 },
        { tech: 'Node', level: 8 },
        { tech: 'MongoDB', level: 8 },
    ],
    country: 'Norway',
};
const studentJSON = JSON.stringify(student);
localStorage.setItem('student', studentJSON);
console.log(localStorage);
console.log(JSON.parse(localStorage.getItem('student')));

// oppgaver level 3
const personAccount = {
    firstName: 'John',
    lastName: 'Doe',
    incomes: [],
    expenses: [],

    totalIncome: function () {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
    totalExpenses: function () {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
    addIncome: function (description, amount) {
        this.incomes.push({ description, amount: parseFloat(amount) });
    },
    addExpense: function (description, amount) {
        this.expenses.push({ description, amount: parseFloat(amount) });
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpenses();
    },
    accountInfo: function () {
        return `Account holder: ${this.firstName} ${this.lastName}
        Total income: ${this.totalIncome()}
        Total expenses: ${this.totalExpenses()}
        Account balance: ${this.accountBalance()}`;
    },
};
// personAccount.addIncome(prompt('What is the source of income?'), prompt('What is the amount of income?'));
// personAccount.addExpense(prompt('What is the expense?'), prompt('What is the cost of the expense?'));
console.log(personAccount.accountInfo());
