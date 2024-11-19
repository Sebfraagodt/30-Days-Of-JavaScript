function outerFunction1() {
    let count = 0;
    function innerFunction() {
        count++;
        return count;
    }

    return innerFunction;
}
const innerFunc = outerFunction1();

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());

console.log('\n');

function outerFunction2() {
    let count = 0;
    function plusOne() {
        count++;
        return count;
    }
    function minusOne() {
        count--;
        return count;
    }
    function plusTwo() {
        count += 2;
        return count;
    }

    return {
        plusOne: plusOne(),
        minusOne: minusOne(),
        plusTwo: plusTwo(),
    };
}
const innerFuncs = outerFunction2();

console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);
console.log(innerFuncs.plusTwo);

function personAccount(description, amount) {
    const firstName = 'John';
    const lastName = 'Doe';
    const incomes = [];
    const expenses = [];

    function totalIncome() {
        return incomes.reduce((total, income) => total + income.amount, 0);
    }
    function totalExpenses() {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    }
    function addIncome(description, amount) {
        return incomes.push({ description, amount: parseFloat(amount) });
    }
    function addExpense(description, amount) {
        return expenses.push({ description, amount: parseFloat(amount) });
    }
    function accountBalance() {
        return totalIncome() - totalExpenses();
    }
    function accountInfo() {
        return `Account holder: ${firstName} ${lastName}
        Total income: ${totalIncome()}
        Total expenses: ${totalExpenses()}
        Account balance: ${accountBalance()}`;
    }
    return {
        totalIncome: totalIncome(),
        totalExpenses: totalExpenses(),
        addIncome: addIncome(),
        addExpense: addExpense(),
        accountBalance: accountBalance(),
        accountInfo: accountInfo(),
    };
}
const personAccount1 = personAccount();
console.log(personAccount1);
personAccount1.addIncome(prompt('What is the source of income?'), prompt('What is the amount of income?'));
personAccount1.addExpense(prompt('What is the expense?'), prompt('What is the cost of the expense?'));
console.log(personAccount1.accountInfo);
