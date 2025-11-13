// Animal Class
class Animal {
    constructor(species) {
        this._species = species;
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to make sound
    makeSound() {
        console.log(`The ${this._species} makes a sound`);
    }
}

// Cat Class
class Cat extends Animal {
    constructor(species) {
        super(species);
    }

    // Method to purr
    purr() {
        console.log("purr");
    }
}

// Dog Class
class Dog extends Animal {
    constructor(species) {
        super(species);
    }

    // Method to bark
    bark() {
        console.log("woof");
    }
}

// Make classes available globally for Cypress tests
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
