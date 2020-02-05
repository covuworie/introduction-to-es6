let word1 = 'Dylan';
let word2 = 'Israel';
let num1 = 2;
let num2 = 3;

const fullName = `${word1} ${word2}`;

console.log(fullName);

const sum = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;

console.log(sum);

let example = `${word1}
${word2}
`;

console.log(example);
document.getElementById('example').innerText = example;
