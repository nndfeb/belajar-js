/**
 *? Nullish coalescing operator (??)
 * The nullish coalescing (??) operator is a logical operator
 * that returns its right-hand side operand when its left-hand side operand is null or undefined,
 * and otherwise returns its left-hand side operand.
 */

// Tidak menggunakan nullis coalescing
// let parameter = null;
// let parameter = "EKo";
let parameter;
let data = parameter;
if (data == undefined || data == null) {
  data = "Nilai default";
}
console.log(data); // Output : Nilai default

// Menggunakam Nullish Coalescing

let nilai;
// apakan nilai berisi ksong / null / undifiend mamka gunakan "nilai default"
let rekap = nilai ?? "nilai default";
console.log(rekap); // Output : nilai default

//JavaScript Demo: Expressions - Nullish coalescing operator
const foo = null ?? "default string";
console.log(foo); // Output : default string

const baz = 0 ?? 42;
console.log(baz); // Output : 0

/** Note :
 **   leftExpr ?? rightExpr
 */

const test = (null || undefined) ?? "foo";
console.log(test); // Output : foo

/**
 ** Examples
Using the nullish coalescing operator
In this example, we will provide default values but keep values other than null or undefined.
 */

const nullValue = null;
const emptyText = "";
const someNumber = 42;

const val1 = nullValue ?? "default value 1";
const val2 = emptyText ?? "default value 2";
const val3 = someNumber ?? 0;

console.log(val1); // Output : default value 1
console.log(val2); // Output : "" (as the empty string is not null or undefined)
console.log(val3); // Output : 42

/**
 ** Assigning a default value to a variable
 * Earlier, when one wanted to assign a default value to a variable,
 * a common pattern was to use the logical OR operator (||):
 */
const myText = "";
const msg = myText || "Hello Word";
console.log(msg); // Output : Hello Word

const msg2 = myText ?? "hello word";
console.log(msg2); // Output : '' (as myText is neither undefined nor null)
