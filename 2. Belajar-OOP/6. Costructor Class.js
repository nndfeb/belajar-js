// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

/**
 * The constructor method is a special
 * method of a class for creating and initializing an object instance of that class.
 */
class Mobil {
  constructor() {
    this.brand = "Toyota";
  }
}

const kendaraan = new Mobil();
console.log(kendaraan.brand); // Output : Toyota

// Example 2
class Person {
  constructor(name) {
    this.name = name;
  }
}

const eko = new Person("Eko");
console.log(eko.name); // Output : Eko

// Example 3

class Buah {
  constructor(name) {
    this.name = name;
  }

  getBuah() {
    console.log(`Hello, bauh ${this.name}`);
  }
}

const apple = new Buah("Apple");
apple.getBuah(); // Hello, bauh Apple
