if (false) {
    var example = 5;
}

console.log(example);

// Essentially the above code is the same as this due to hoisting leading to an undefined value
/*
var example;

if (false) {
    example = 5;
}
*/

// Let is limited to block scoping (the code is literally interpreted as it is - there is no hoisting) so a not defined exception occurs
if (false) {
   let example2 = 5;
}

//console.log(example2);

// Const works similarly to let. The only difference is that for primitive types assignment to a const variable leads to an exception
const example3 = 5;
//example3 = 10;
//console.log(example3);

// However this is not the case for a mutable types like arrays and objects
const example4 = [];
example4.push(5);
console.log(example4);

const example5 = {};
example5.firstName = 'Dylan';
console.log(example5);

// but assignment fails in these cases also!
example4 = [1, 2, 3]
example5 = { firstName: 'Edgar' };