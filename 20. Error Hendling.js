// https://developer.mozilla.org/en-US/docs/Glossary/Static_method
/**
 * Static Method
 */

class MathUntil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Total parameter harus lebih dari 0");
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  // const initEKo = MathUntil.sum(1, 2);
  // console.log(initEKo);
  const initEKo = MathUntil.sum();
  console.log(initEKo);
  console.log("Eko"); // jika terjadi error blok bawahnya tidak akan dijalankan langsung loncat ke catch
} catch (error) {
  console.log(`Terjadi error ${error.message}`);
} finally {
  console.log("finaly Bro!");
}
console.log("Khenedy");

// Example 2
class Counter {
  #counter = 1;

  nextValue() {
    try {
      return this.#counter;
    } finally {
      this.#counter++;
    }
  }
}

const initCounter = new Counter();
console.log(initCounter.nextValue());
console.log(initCounter.nextValue());
console.log(initCounter.nextValue());
console.log(initCounter.nextValue());
console.log(initCounter.nextValue());
