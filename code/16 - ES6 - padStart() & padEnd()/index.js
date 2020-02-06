let example = 'Dylan';
console.log(example.padStart(10, 'a'));

// no room for padding
example = 'Dylan Israel';
console.log(example.padStart(10, 'a'));

example = 'Dylan Israel';
console.log(example.padEnd(10, 'a'));

example = 'Dylan';
console.log(example.padEnd(10, 'a'));