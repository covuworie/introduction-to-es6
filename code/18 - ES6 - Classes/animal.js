export class Animal {
    // constructor
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    // instance method
    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }

    // get property
    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }

    // static method
    static return10() {
        return 10;
    }
}