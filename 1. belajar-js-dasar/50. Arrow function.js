// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

/**
 * Arrow function expressions
An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
Arrow functions cannot use yield within their body and cannot be created as generator functions.
 */

const sayHello = (name) => {
  const say = `Hello ${name}`;
  console.log(say);
};
sayHello("EKo"); // Output : Hello EKo

// Example 2
const helloIndoenesia = (name) => console.log(`Hello ${name}`);
helloIndoenesia("Jakarta"); // Output : Hello Jakarta

// Example 3
const sum = (first, second) => first + second;
console.log(sum(1, 2)); // Output : 3

// Example 4
const namaBuah = (name) => console.log(`Nama buah ${name}`);
namaBuah("Semangka"); // Output : Nama buah Semangka

// Example 5
function giveMename(callback) {
  callback("Nendi");
}
giveMename((name) => console.log(`Hello ${name}`)); // Output : Hello Nendi
