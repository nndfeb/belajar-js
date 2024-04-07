/**
 * ? Undifined
 * Adalah sebuah type data yang belum ditambahkan nilai
 * undifined berbeda dangan null
 */

// Contoh :

let contoh;
if (contoh == undefined) {
  console.log("UNDIFINED");
} else {
  console.log("DEFINED");
}
// Output : UNDIFINED

// Contoh ke-2
let contoh2 = ["Jogja", "Jakarta"];
// index ke-2 itu tidak ada
if (contoh2[2] === undefined) {
  console.log("Kosong tidak ada!");
} else {
  console.log(`Hello ${contoh2[2]}`);
}
// Output : Kosong tidak ada!

