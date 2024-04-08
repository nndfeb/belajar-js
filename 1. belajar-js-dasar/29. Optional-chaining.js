/**
 * ? Optional chaining  operator (?)
 * yang digunakan untuk mengamankan ketika kita ingin mengakses peoperty sebuah objek dari data nullish
 * Jika kita mencoba mengakses propertu dari sebuh objek dari data nullish tanpa menggunakan optional chaining operator, maka akan terjadi error
 */
let person = {};
console.log(person.address.county); // Output : Cannot read properties of undefined (reading 'county')

// Pengecekan menggunakan if
let buah = {};
let keranjang;
if (buah.apple !== undefined && buah.apple !== null) {
  keranjang = buah.apple.merah;
}
console.log(keranjang);

// Pengecekan menggunakan Optional Chaining
let mobil = {};
console.log(mobil?.honda?.jazz); // Output : undefined
let mobil2 = {
  honda: "Mobil Honda Jazz",
};
console.log(mobil2?.honda); // Output : Mobil Honda Jazz

/**
 * The optional chaining (?.) operator accesses an object's property or calls a function.
 * If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
 */

const adventured = {
  name: "alice",
  cat: {
    name: "Dede",
  },
};

const dogName = adventured?.dog?.name;
console.log(dogName); // Output : undefined

const catName = adventured?.cat?.name;
console.log(catName); // Output : Dede

/**
 ** Optional chaining with function calls
You can use optional chaining when attempting to call a method which may not exist. 
This can be helpful, for example, when using an API in which a method might be unavailable, either due to the age of the implementation or because of a feature which isn't available on the user's device.

Using optional chaining with function calls causes the expression to automatically return undefined instead of throwing an exception if the method isn't found:
 */

/**
 * This is particularly useful for arrays, since array indices must be accessed with square brackets.
 */
function getMagicIndex(arr) {
  console.log(arr?.[42]);
}
getMagicIndex([1, 2, 3, 4, 5, 6, 7]); // Output : undefined
getMagicIndex(); // Output : undefined

/**
 ** Combining with the nullish coalescing operator
The nullish coalescing operator may be used after optional chaining in order to build a default value when none was found:
 */

function printCustomerCity(customers) {
  const customerCity = customers?.city ?? "Unknow city";
  console.log(customerCity);
}

printCustomerCity({
  name: "Nedi",
  city: "paris",
}); // Output : paris

printCustomerCity({
  name: "dika",
  details: {
    age: 23,
  },
}); // Output : Unknow city
