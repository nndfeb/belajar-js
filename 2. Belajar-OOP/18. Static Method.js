// https://developer.mozilla.org/en-US/docs/Glossary/Static_method
/**
 * Static Method
 */

class MathUntil {
  static sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

const result = MathUntil.sum(1, 2, 3, 4, 5);
console.log(result); // Output : 15
