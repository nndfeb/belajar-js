// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
const input = "12345";
const convertToNumber = Number(input);

console.log(typeof input); // Output : string
console.log(typeof convertToNumber); // Output : number
console.log(convertToNumber); // Output : 12345
console.log(Number("Salah")); // Output : NaN

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#static_properties
console.log(Number.MIN_VALUE); // Output : 5e-324
console.log(Number.MAX_VALUE); // Output : 1.7976931348623157e+308
console.log(Number.MIN_SAFE_INTEGER); // Output : -9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // Output : 9007199254740991
console.log(Number.NaN); // Output : NaN

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#static_methods
const data = Number("12345");
console.log(Number.isInteger(data)); // Output : true
console.log(Number.isNaN(data)); // Output : false

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#instance_methods
// https://community.lansweeper.com/t5/customizing-the-web-console/list-of-currency-culture-codes/ta-p/64431
/**
 * Number Instance Methods
 */

const value = Number("12345");
console.log(value.toString(2)); // Output : 11000000111001
console.log(value.toLocaleString("id-ID")); // Output : 12.345
console.log(value.toLocaleString("en-US")); // Output : 12,345
