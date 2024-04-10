class CounterIteratorResult {
  constructor(value, done) {
    this.done = done;
    this.value = value;
  }
}

class CounterIterator {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  next() {
    try {
      if (this.value > this.max) {
        return new CounterIteratorResult(this.value, true);
      } else {
        return new CounterIteratorResult(this.value, false);
      }
    } finally {
      this.value++;
    }
  }
}

class Counter {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }
  [Symbol.iterator]() {
    return new CounterIterator(this.value, this.max);
  }
}

const initCounters = new Counter(1, 10);
for (const value of initCounters) {
  console.log(value);
}
