/**
 * Symbol
 * Merupakan tipe data yang digaransi akan selalu unique setiap kali kita membuat data symbol
 * Symbol kdang banyak digunakan untuk membuat key pada object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
 */

// Example 1
const a = Symbol();
const c = Symbol("foo");
const d = Symbol("foo");
console.log(c === a); // Output : false
// Benar2 unique waalapun isinya sama

// Example 2
const sym = Symbol("foo");
console.log(typeof sym); // Output : symbol

const symObj = Object(sym);
console.log(typeof symObj); // Output : object

// Example 3
const firstName = Symbol();
const lastName = Symbol();

const person = {};
person[firstName] = "Eko";
person[lastName] = "Khendy";
console.log(person);
console.log(person[firstName]);
console.log(person[lastName]);

{
  /**
   * Symbol For
   * Kdang agak sulit membat symbol harus selalu mengunakan variable
   * Permbuatan Symbol juga bisa menggunakan static method Symbol.for(key)
   * Jika kita menggunakan key yang sama, Symbol yang sama akan selalu dikembalikan
   */
  //   Example 1
  console.log(Symbol.for("firstName") === Symbol.for("firstName")); // Output : true
  //   Example 2
  const person = {};
  person[Symbol.for("firstName")] = "Eko";
  person[Symbol.for("lastName")] = "Khenedy";

  console.log(person); // Output : { [Symbol(firstName)]: 'Eko', [Symbol(lastName)]: 'Khenedy' }

  console.log(person[Symbol.for("firstName")]); // Output : Eko
  console.log(person[Symbol.for("lastName")]); // Output : Khenedy
  //   Example 3
}
