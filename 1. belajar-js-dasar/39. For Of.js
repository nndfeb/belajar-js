// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

/**
 * The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
 * Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.
 */

// Example
const arr = ["a", "b", "c"];
for (const element of arr) {
  console.log(`ke-${element}`); // Output : ke-a ke-b ke-c
}

//* Example 2 | Aritmatika
const dataNumber = [2, 4, 6];
for (let value of dataNumber) {
  value += 1;
  console.log(`${value}`); // Output : 3 5 7
}

//* Example 3 | Iterating over a string
const text = "ABC";
for (let value of text) {
  console.log(value); // Output :  A B C
}

//* Example 4 | Iterating over a Map
const indoensia = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
console.log(indoensia); // Output : Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

for (const value of indoensia) {
  console.log(value);
}
/** Output :
[ 'a', 1 ]
[ 'b', 2 ]
[ 'c', 3 ]
 */

for (const [key, value] of indoensia) {
  console.log(value); // Output : 1, 2, 3
}

//* Example 5 | Iterating over a Set
const duplikasi = new Set([1, 1, 2, 2, 2, 3, 3, 3, 4]);
for (const value of duplikasi) {
  console.log(value); // Output : 1 2 3 4
}

//* Example 6 | Iterating over the arguments object
function foo() {
  for (const value of arguments) {
    console.log(`ke-${value}`);
  }
}
foo(1, 2, 3); // Output : ke-1 ke-2 ke-3
