/**
 * ? Operator Logika
 *
 ** Operato && atau AND
 * jika kedua nilai bernilai true maka akan menghasilkan true
 * jika salah satunya saja true makan hasilnya akan fasle
 *
 ** Opeartor || atau OR
 * jika salah satunya saja bernilai true makan akan menghasilkan true
 * Jika keduanya bernilai false maka akan menghaislkan false
 *
 ** Operator Unary ! atau kebalikan
 * Jika nilainya true maka akan dirubah menjadi kebalikannya false
 * begitupun sebaliknya
 *
 */

const nilaiUjian = 78;
const nilaiAbsensi = 78;

const lulusUjian = nilaiUjian > 75;
console.log(`Ujian : ${lulusUjian}`); // Output : Ujian : true

const lulusAbsensi = nilaiAbsensi > 75;
console.log(`Absensi : ${lulusAbsensi}`); // Output : Absensi : true

const lulus = lulusAbsensi && lulusUjian;
console.log(lulus); // Output : true
