import { Animal } from './animal.js';

// inheritance
export class Cat extends Animal {
    constructor(type, legs, tail = true) {
        super(type, legs); // call the superclass constructor
        this.tail = tail;
    }

    // override method
    makeNoise(sound = 'meow') {
        console.log(sound);
    }
}