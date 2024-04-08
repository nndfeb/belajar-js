/**
 * ? In Operator
 * Adalah opertor yang bisa dilakukan untuk mengecek apakan sebuah property ada di dalam object
 * jika properti tersebut ada di object, maka hasilnya true, sedangakan jika tidak nilanya false
 * Tidak hanya di object, In juga bisa digunakan untuk mengecek index pada array
 */

// contoh in:
const keranjang = {
  buah: "Appel",
  minuman: "Bear",
};

const result = "buah" in keranjang;
const result2 = "makanan" in keranjang;
console.log(result); // Output : true
console.log(result2); // Output : false

/** Note :
 * In Operator hanya kan mengecek apakan sebuah property atau index ada atau tidak
 * jadi walapun property atau index nya undifiend atau null, maka tetap akan dianggap ada
 *
 */

const kampus = {
  guru: undefined,
  siswa: null,
};
const result3 = "guru" in kampus;
console.log(result3); // Output : true

const result4 = "siswa" in kampus;
console.log(result4); // Output : true
    