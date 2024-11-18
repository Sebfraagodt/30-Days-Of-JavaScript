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
