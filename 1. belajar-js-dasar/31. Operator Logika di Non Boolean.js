/**
 * ? Operator Logika di Non Boolean
 * Sebenarnya kita sudah tahu jika logika AND (&&) dan OR (||) digunakan untuk dua data boolean
 * Namun bedanya di JS kita bisa menggunakan operator  logika AND dan OR untuk tipe data non boolean
 *
 */

/**
 *? Operator Logika OR (||) membaca dari kiri kekanan
 * Operator ini akan mengambil nilai pertama yang truthy
 * jiika tidak ada satupun yang bernilai truthy maka yang terakhir yang akan diambil
 */

console.log("Hello" || ""); // Output : Hello
console.log("" || []); // Output : []
console.log("" || 0); // Output : 0
console.log(0 || ""); // Output : ""
console.log(null || "NULL"); // Output : NULL
console.log(undefined || "UNDIFIEND"); // Output : UNDIFIEND
console.log("UNDIFIEND" || undefined); // Output : UNDIFIEND

const person = {
  firstName: "",
  lastName: "Khenedy",
};

const name = person.firstName || person.lastName;
console.log(name);

/**
 * ? Operator AND (&&)
 */
console.log("Hello" && "");
console.log("" && []);
console.log(0 && "NULL");
// Jika keduanya true maka akan mengembalikan nilai yg paling kanan
console.log("0" && "NULL");
