let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];
example2.push(true);

console.log(example1);
console.log(example2);

example1 = {
    firstName: 'Dylan',
    lastName: 'Israel'
}

example2 = {
    ...example1,
    middleName: 'Coding God'
}

console.log(example1);
console.log(example2);