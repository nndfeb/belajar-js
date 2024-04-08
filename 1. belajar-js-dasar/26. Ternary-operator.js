/**
 *? Ternary Operator
 * Opeartor sederhana dari If statement
 * terdiri dari kondisi yang dievaluasi jika menghasilkan true maka nilai pertama diambil, jika fasle nilai kedua diambil
 *
 */

// Code biasa
const nilai = 75;
let msg;
if (nilai >= 75) {
  msg = "lulus";
} else {
  msg = "gagal";
}

console.log(msg);

// Ternary Operator
const mtk = 75;
let pesan = mtk >= 75 ? "lulus" : "gagal";
console.log(pesan);

/**
 ** Handling null values
One common usage is to handle a value that may be null:
 */

const greeting = (person) => {
  const name = person ? person.name : "nama default";
  return `Hallo ${name}`;
};
console.log(greeting({ name: "nendi" })); // Output : Hallo nendi
console.log(greeting(null)); // Output : Hallo nama default

/**
 ** Conditional chains
The ternary operator is right-associative, which means it can be "chained" in the following way, similar to an if … else if … else if … else chain:
 */
const nilaiMtk = 60;
const hasil =
  nilaiMtk > 80
    ? "Lulus"
    : nilaiMtk <= 60
    ? "tidak lulus"
    : nilaiMtk <= 10
    ? "gagal"
    : "Ulang lagi";

console.log(hasil); // Output : tidak lulus
