class Counter {
  #counter = 0;
  increment() {
    this.#counter++;
  }
  decrement() {
    this.#counter--;
  }
  get() {
    return this.#counter;
  }
}

const county = new Counter();
county.increment();
county.increment();
county.increment();
county.increment();
county.increment();
console.log(county.get());
console.log(county);
