// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

/**
 *? Closure
 * Adalah kominasi function dan bundel referensi ke data sekitarnya
 * Kita sudah tahu bahwa local scope, kita bisa membuat sebuah function di local scope dan referensi ke dan sekitar local scope tersebut keluar scope nya
 */

function createAdder(value) {
  const owner = "Eko";
  function add(param) {
    console.log(owner);
    return value + param;
  }
  return add;
}
const addTwo = createAdder(2);
console.log(addTwo(20));

// Seakan2 kita membuat code sepeti ini
// function addTwo(param) {
//   console.log("Eko");
//   return 2 + param;
// }
