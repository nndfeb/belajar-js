// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

/**
 * Kita bisa mengirimkan data sebanak2nya pada satu parameter akan otomatis diconversi jadi array
 * Ketentuan:
 * rest parameter hanya boleh ada satu di function tidak boleh lebih dari satu
 * rest parameter hanya boleh ada di parameter paling akhir, tidak boleh ada di tegah keuali jika  parameternya memang hanya satu
 * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
 */

function sum(name, ...params) {
  let total = 0;
  for (const item of params) total += item;
  console.log(`Total ${name} is ${total}`);
}

sum("Oracle", 1, 2, 3, 4); // Output : Total Oracle is 10

// Example

function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]
