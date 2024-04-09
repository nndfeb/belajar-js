/**
 * ? Recursive Fucntion
 * kemamuan function untuk memanggil dirinya sendiri
 *
 */

// Factorial menggunakan perurangan

function factorial(value) {
  let result = 1;
  for (let i = 1; i <= value; i++) result *= i;
  return result;
}

console.log(factorial(4)); // Output : 24
console.log(1 * 2 * 3 * 4); // Output : 24

// Factorial Menggunakan recursive
function factorialRecursive(value) {
  if (value == 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}
console.log(factorialRecursive(4));
