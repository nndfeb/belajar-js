// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

/**
 * The for...in statement iterates over all enumerable string properties of an object
 * (ignoring properties keyed by symbols), including inherited enumerable properties.

for (variable in object)
  statement 
*/
const buah = { nama: "apple", warna: "merah", price: 15 };
for (const property in buah) {
  console.log(`${property}: ${buah[property]}`);
}
/** Output :
nama: apple
warna: merah
price: 15
 */

const triangle = { a: 1, b: 2, c: 3 };
function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;
const obj = new ColoredTriangle();

for (const prop in obj) {
  if (Object.hasOwn(obj, prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Logs:
// "obj.color = red"
