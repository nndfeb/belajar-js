/**
 * ? Type Data Object
 *
 * Merupakan tipe data yg mirip dengan array
 * yang membedakan hanya index pada tipe data object bisa menggunakan string
 * index di object biasanya disebut attributes atau properties
 */

let orang = {};
// Menambah atau mengubah
orang["nama"] = "Nendi";
orang["alamat"] = "Karawang";
orang["umur"] = 25;

console.log(orang); // Output :{ nama: 'Nendi', alamat: 'Karawang', umur: 25 }

// Delete
delete orang["umur"];
console.log(orang); // Output : { nama: 'Nendi', alamat: 'Karawang' }

const buah = {
  nama: "Apple",
  harga: 10000,
  jumlah: 5,
};

console.log(buah); // Output : { nama: 'Apple', harga: 10000, jumlah: 5 }
console.log(`Nama buah ${buah.nama}`); // Output : Nama buah Apple
