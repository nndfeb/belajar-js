/**
 * ? if Expresion
 * If aalah percabangan artinya kita bisa mngeksekusi program tertentu ketika suatu kondisi terpenuhi
 */
const contoh = 90;
if (contoh > 80) {
  console.log("Great"); // Output : Great
}

/**
 * ? else expresion
 * Blok if akan dieksekusi ketika kondisi if terpenuhi dan bernilai true
 * jika kondisi if bernilai false kita butuh menampungnya di else expresion
 */

const nilaiUjian = 60;
if (nilaiUjian > 75) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}

/**
 * ? Else if expresion
 * terkadang dalam if kita mebutuhkan beberapa kondisi
 * kita bisa menggunakan else if expresion
 */
const nilaiMtk = 60;
if (nilaiMtk > 80) {
  console.log("Lulus");
} else if (nilaiMtk > 60) {
  console.log("Tidak Lulus");
} else {
  console.log("Try again");
}
