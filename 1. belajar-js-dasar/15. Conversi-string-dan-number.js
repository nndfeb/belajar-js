/**
 * ? Conversi String dan Number
 *
 ** function            |       Keterangan
 * parseInt(stirng)             Conveersi string to number (bilangan bulat)
 * parseFloat(string)           Conveersi string to number (bilangan pecahan)
 * Number(string)               Conveersi string to number (bilangan pecahan atau bulat)
 * number.toString()            Conveersi number to string
 *
 */

//! Contoh salah :
const value1 = "1";
const value2 = 1;
const join = value1 + value2;
console.log(join); // Output : 11
/**
 * Kode diatas menghailkan 11
 * dikarnakan js mengaggap itu adalah penggabungan bukan proses artimatika
 */

// Conversi string to integer
const nilaiA = parseInt("22");
const nilaiB = 1;
jumlah = nilaiA + nilaiB;
console.log(jumlah);

// lihat disini
console.log(parseInt("1.1")); // Output : 1
console.log(parseFloat("1.1")); // Output : 1.1
console.log(Number(30) + 20); // Output : 50
console.log(Number("1,1")); // Output : NaN

const a = 1;
const b = 2;
const total = a.toString() + b.toString();
console.log(total); // Output : 12
