/**
 *? Operator typeof
 * typeof adalah operator yang bias kita gunakan untuk melitah type data sebuah value atau variable
 * Karena JS merupakan dynamic language, jadi kadang kita perlu mengecek tipe data sebuah value atau variable menggunkana operator typeof
 * Hasil dari operator typeof adlaa string tipe datanya
 */

// let data = null; // Output : object
// let data = []; // Output : object
// let data = {}; // Output : object
// let data = "nedi"; // Output : string
// let data = true; // Output : boolean
// let data = 100; // Output : number
// let data = 1.1; // Output : number
let data = 11n; // Output : bigint
console.log(typeof data);
