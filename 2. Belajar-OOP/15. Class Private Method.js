class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName();
    }
  }

  #sayWithoutName() {
    console.log(`Hello`);
  }

  #sayWithName(name) {
    console.log(`Hello ${name}`);
  }
}

const eko = new Person();
eko.say("Joko"); // Output : Hello Joko
eko.#sayWithoutName(); // Output Error : Private field '#sayWithoutName' must be declared in an enclosing class
