// Animal Class
class Animal {
    private _species: string;

    constructor(species: string) {
        this._species = species;
    }

    // Getter for species
    get species(): string {
        return this._species;
    }

    // Method to make sound
    makeSound(): void {
        console.log(`The ${this._species} makes a sound`);
    }
}

// Cat Class
class Cat extends Animal {
    constructor() {
        super("cat");
    }

    // Method to purr
    purr(): void {
        console.log("purr");
    }
}

// Dog Class
class Dog extends Animal {
    constructor() {
        super("dog");
    }

    // Method to bark
    bark(): void {
        console.log("woof");
    }
}
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
