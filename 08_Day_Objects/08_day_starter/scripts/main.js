console.log('Level 1');
const dog = {
    name: 'Ghia',
    age: 4,
    color: 'Brown',
    bark: true,
    breed: 'Doberman',
    getDogInfo: function () {
        return `
        Name: ${this.name}, 
        Age: ${this.age}, 
        Color: ${this.color}, 
        Can bark: ${this.bark}, 
        Breed: ${this.breed}
        `;
    },
};
console.log(dog);
console.log(dog.getDogInfo());

console.log('Level 2');
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30,
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50,
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50,
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50,
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
};
console.log(users);

console.log('Oppgave 1');
let mostSkilledUser = null;
let maxSkillsCount = 0;
for (const user in users) {
    const skillsCount = users[user].skills.length;
    if (skillsCount > maxSkillsCount) {
        maxSkillsCount = skillsCount;
        mostSkilledUser = user;
    }
}
console.log(mostSkilledUser);

console.log('Oppgave 2.1');
let loggedInUsersCount = 0;
for (const user in users) {
    if (users[user].isLoggedIn) {
        loggedInUsersCount++;
    }
}
console.log(`There are ${loggedInUsersCount} logged in users`);

console.log('Oppgave 2.2');
let usersWith50Points = 0;
for (const user in users) {
    if (users[user].points >= 50) {
        usersWith50Points++;
    }
}
console.log(`There are ${usersWith50Points} users with 50 points or more`);

console.log('Oppgave 3');
console.log('MERN Stack Developers:');
const mernDevelopers = [];
for (const user in users) {
    if (
        users[user].skills.includes('MongoDB') &&
        users[user].skills.includes('Express') &&
        users[user].skills.includes('React') &&
        users[user].skills.includes('Node')
    ) {
        mernDevelopers.push(user);
    }
}
console.log(`These are the people that are MERN stack developers: ${mernDevelopers}`);

console.log('Oppgave 4');
const usersWithMyName = Object.assign({}, users, {
    Sebastian: {
        email: 'seb@seb.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'react'],
        age: 18,
        isLoggedIn: true,
        points: 40,
    },
});
console.log(usersWithMyName);

console.log('Oppgave 5');
console.log(Object.keys(users));

console.log('Oppgave 6');
console.log(Object.values(users));

console.log('Oppgave 7');
const specificCountry = countries.find((country) => country.name === 'Norway');
console.log(specificCountry);
console.log(`Country: ${specificCountry.name}`);
console.log(`Capital: ${specificCountry.capital}`);
console.log(`Languages: ${specificCountry.languages.join(', ')}`);
console.log(`Population: ${specificCountry.population}`);
console.log('------------------------');
console.log(`
    Country: ${specificCountry.name}, 
    Capital: ${specificCountry.capital}, 
    Languages: ${specificCountry.languages.join(', ')}, 
    Population: ${specificCountry.population},
    -----------------------------------------------------------
    `);

console.log('Level 3');
console.log('Oppgave 1');

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

// const incomeDesc = prompt('Add your income description here:');
// const incomeAmount = parseFloat(prompt('Add your income amount here:'));

// const expenseDesc = prompt('Add your expense description here:');
// const expenseAmount = parseFloat(prompt('Add your expense amount here:'));

// const secondIncomeDesc = prompt('Add your second income description here:');
// const secondIncomeAmount = parseFloat(prompt('Add your second income amount here:'));

// personAccount.addIncome(incomeDesc, incomeAmount);
// personAccount.addExpense(expenseDesc, expenseAmount);
// personAccount.addIncome(secondIncomeDesc, secondIncomeAmount);

console.log(personAccount.accountInfo());
console.log(personAccount.incomes);
console.log(personAccount.expenses);

const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
];

// console.log('Oppgave 2.1');
// function signUp(username, email, password) {
//     const existingUser = users2.find((user) => user.username === username || user.email === email);

//     if (existingUser) {
//         console.log('You already have an account. Please log in instead.');
//         return;
//     }
//     const newUser = {
//         _id: generateUniqueId(),
//         username,
//         email,
//         password,
//         createdAt: new Date().toLocaleString(),
//         isLoggedIn: false,
//     };
//     users2.push(newUser);

//     console.log(`Account created successfully for ${username}!`);
// }
// function generateUniqueId() {
//     return Math.random().toString(36).substr(2, 6);
// }

// const username = prompt('Enter your username: ');
// const email = prompt('Enter your email: ');
// const password = prompt('Enter your password: ');
// signUp(username, email, password);
// console.log(users2);

// console.log('Oppgave 2.2');
// function signIn(email, password) {
//     const user = users2.find((user) => user.email === email && user.password === password);

//     if (user) {
//         user.isLoggedIn = true;
//         console.log(`Welcome back, ${user.username}! You are now signed in.`);
//     } else {
//         console.log('Invalid email or password. Please try again.');
//     }
// }
// const emailToSignIn = prompt('Enter your email to sign in: ');
// const passwordToSignIn = prompt('Enter your password: ');
// signIn(emailToSignIn, passwordToSignIn);

console.log('Oppgave 3.1');
function rateProduct() {
    const productId = prompt('Enter the product ID:');
    const userId = prompt('Enter your user ID:');
    const rate = parseFloat(prompt('Enter your rating (1-5):'));

    const product = products.find((product) => product._id === productId);
    if (product) {
        const existingRating = product.ratings.find((rating) => rating.userId === userId);
        if (existingRating) {
            existingRating.rate = rate;
        } else {
            product.ratings.push({ userId, rate });
        }
        console.log(`Rated product ${product.name} with ${rate} stars`);
        console.log(`Ratings:`);
        product.ratings.forEach((rating) => {
            console.log(`  ${rating.userId}: ${rating.rate} stars`);
        });
    } else {
        console.log(`Product with id ${productId} not found`);
    }
}
// rateProduct();
console.log(products);

console.log('Oppgave 3.2');
function displayAllRatings() {
    products.forEach((product) => {
        console.log(`Product: ${product.name}`);
        if (product.ratings.length > 0) {
            console.log(`Ratings:`);
            product.ratings.forEach((rating) => {
                console.log(`  ${rating.userId}: ${rating.rate} stars`);
            });
        } else {
            console.log(`  No ratings yet.`);
        }
        console.log('------------------------');
    });
}
displayAllRatings();
