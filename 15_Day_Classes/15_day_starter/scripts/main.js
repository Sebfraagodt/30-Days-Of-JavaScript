class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0;
        this.skills = [];
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
    get getScore() {
        return this.score;
    }
    get getSkills() {
        return this.skills;
    }
    set setScore(score) {
        this.score += score;
    }
    set setSkill(skill) {
        this.skills.push(skill);
    }
    getPersonInfo() {
        const fullName = this.getFullName();
        const skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`;

        const formattedSkills = skills ? `He knows ${skills}` : '';

        const info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
        console.log(this);
        return info;
    }
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node'];
        const index = Math.floor(Math.random() * skills.length);
        console.log('hi');
        return skills[index];
    }
}
const person = new Person();
console.log(person);

console.log(Person.favoriteSkill());

class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
        super(firstName, lastName, age, country, city);
        this.gender = gender;
    }

    saySomething() {
        console.log('I am a child of the person class');
    }
    getPersonInfo() {
        const fullName = this.getFullName();
        const skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`;

        const formattedSkills = skills ? `He knows ${skills}` : '';
        const pronoun = this.gender == 'Male' ? 'He' : 'She';

        const info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
        console.log(this);
        return info;
    }
}

const s1 = new Student('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki', 'Male');
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female');
s1.setScore = 1;
s1.setSkill = 'HTML';
s1.setSkill = 'CSS';
s1.setSkill = 'JavaScript';

s2.setScore = 1;
s2.setSkill = 'Planning';
s2.setSkill = 'Managing';
s2.setSkill = 'Organizing';

console.log(s1);
console.log(s2);

console.log(s1.saySomething());
console.log(s1.getFullName());
console.log(s1.getPersonInfo());

console.log(s2.saySomething());
console.log(s2.getFullName());
console.log(s2.getPersonInfo());

console.log('\n');
console.log('Level 1');
// class Animal {
//     constructor(name, age, color, legs) {
//         this.name = name;
//         this.age = age;
//         this.color = color;
//         this.legs = legs;
//     }

//     getDescription() {
//         return `${this.name} is a ${this.age}-year-old ${this.color} animal with ${this.legs} legs.`;
//     }

//     getAge() {
//         return `${this.name} is ${this.age} years old.`;
//     }

//     changeColor(newColor) {
//         this.color = newColor;
//         return `${this.name} has changed color to ${this.color}.`;
//     }

//     getLegs() {
//         return `${this.name} has ${this.legs} legs.`;
//     }
// }

// const dog = new Animal('Buddy', 5, 'brown', 4);
// console.log(dog.getDescription());
// console.log(dog.getAge());
// console.log(dog.changeColor('black'));
// console.log(dog.getLegs());

// const cat = new Animal('Whiskers', 3, 'white', 4);
// console.log(cat.getDescription());
// console.log(cat.getAge());
// console.log(cat.changeColor('gray'));
// console.log(cat.getLegs());

console.log('\n');
console.log('Level 2');
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    getDescription() {
        return `${this.name} is a ${this.age}-year-old ${this.color} animal with ${this.legs} legs.`;
    }

    getAge() {
        return `${this.name} is ${this.age} years old.`;
    }

    changeColor(newColor) {
        this.color = newColor;
        return `${this.name} has changed color to ${this.color}.`;
    }

    getLegs() {
        return `${this.name} has ${this.legs} legs.`;
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs);
        this.breed = breed;
    }

    getDescription() {
        return `${this.name} is a ${this.age}-year-old ${this.color} ${this.breed} cat with ${this.legs} legs.`;
    }
}

const dog = new Animal('Buddy', 5, 'brown', 4);
console.log(dog.getDescription());
console.log(dog.getAge());
console.log(dog.changeColor('black'));
console.log(dog.getLegs());

const cat = new Cat('Whiskers', 3, 'white', 4, 'Persian');
console.log(cat.getDescription());
console.log(cat.getAge());
console.log(cat.changeColor('gray'));
console.log(cat.getLegs());
console.log(`The breed of the cat is: ${cat.breed}`);

console.log('\n');
console.log('Level 2');
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = {
    count: () => {
        return ages.length;
    },
    sum: () => {
        return ages.reduce((acc, age) => acc + age, 0);
    },
    min: () => {
        return Math.min(...ages);
    },
    max: () => {
        return Math.max(...ages);
    },
    range: () => {
        return statistics.max() - statistics.min();
    },
    mean: () => {
        return Math.round(statistics.sum() / statistics.count());
    },
    median: () => {
        const sortedAges = [...ages].sort((a, b) => a - b);
        const half = Math.floor(sortedAges.length / 2);
        return sortedAges.length % 2 ? sortedAges[half] : (sortedAges[half - 1] + sortedAges[half]) / 2;
    },
    mode: () => {
        const frequency = {};
        ages.forEach((age) => {
            frequency[age] = (frequency[age] || 0) + 1;
        });
        const maxCount = Math.max(...Object.values(frequency));
        const mode = Object.keys(frequency).find((key) => frequency[key] === maxCount);
        return { mode: Number(mode), count: maxCount };
    },
    var: () => {
        const mean = statistics.mean();
        const squaredDiffs = ages.map((age) => Math.pow(age - mean, 2));
        return squaredDiffs.reduce((acc, val) => acc + val, 0) / statistics.count();
    },
    std: () => {
        return Math.sqrt(statistics.var()).toFixed(1); // Round to 1 decimal place
    },
    freqDist: () => {
        const frequency = {};
        ages.forEach((age) => {
            frequency[age] = (frequency[age] || 0) + 1;
        });
        const total = statistics.count();
        return Object.entries(frequency)
            .map(([age, count]) => {
                return [((count / total) * 100).toFixed(1), Number(age)];
            })
            .sort((a, b) => b[0] - a[0]);
    },
};

console.log('Count:', statistics.count()); // 25
console.log('Sum: ', statistics.sum()); // 744
console.log('Min: ', statistics.min()); // 24
console.log('Max: ', statistics.max()); // 38
console.log('Range: ', statistics.range()); // 14
console.log('Mean: ', statistics.mean()); // 30
console.log('Median: ', statistics.median()); // 29
console.log('Mode: ', statistics.mode()); // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()); // 17.5
console.log('Standard Deviation: ', statistics.std()); // 4.2
console.log('Frequency Distribution: ', statistics.freqDist());

class PersonAccount {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.incomes = new Set();
        this.expenses = new Set();
    }
    addIncome(amount, description) {
        this.incomes.add({ amount, description });
    }
    addExpense(amount, description) {
        this.expenses.add({ amount, description });
    }
    totalIncome() {
        let total = 0;
        for (const income of this.incomes) {
            total += income.amount;
        }
        return total;
    }
    totalExpense() {
        let total = 0;
        for (const expense of this.expenses) {
            total += expense.amount;
        }
        return total;
    }
    accountInfo() {
        return (
            `Account Holder: ${this.firstname} ${this.lastname}\n` +
            `Total Income: $${this.totalIncome()}\n` +
            `Total Expenses: $${this.totalExpense()}\n` +
            `Account Balance: $${this.accountBalance()}`
        );
    }
    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
}
const account = new PersonAccount('John', 'Doe');
account.addIncome(5000, 'Salary');
account.addIncome(1500, 'Sidejob');
account.addExpense(2000, 'Rent');
account.addExpense(300, 'Food');

console.log(account.accountInfo());
console.log(account.incomes);
console.log(account.expenses);
