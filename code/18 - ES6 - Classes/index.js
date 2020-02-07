import { Animal } from './animal.js';
import { Cat } from './cat.js';

let cat = new Animal('Cat', 4);

console.log(cat.type);
console.log(cat.legs);

cat.legs = 3;
console.log(cat.legs);

cat.makeNoise();
cat.makeNoise('Meow');

console.log(Animal.return10());
// using a static method through an instance throws an exception!
//console.log(cat.return10());

console.log(cat.metaData);

// use Cat class instead
cat = new Cat('Cat', 4);

// call overriden method
cat.makeNoise();

// use superclass property
console.log(cat.metaData); // missing tail of course