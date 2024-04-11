/**
 ** RegExp
 * Merupakan implementasi dari regular expression di JS
 * Regular Expression merupakan fitur untuk mencari text dengan pola
 * Membuat regular expression di JS bisa dilakukan dengan dua cara, yaitu menggunakan literal notation atau membuat object RegExp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 */

/**
 ** RegExp Instance Method
 * Instance Method      |   Keterangan
 * exec(value):result       Eksekusi regex, jika menemukan data sesuai pola, maka kembalikan resultnya, jika tikda maka null
 * test(value):boolean      Eksekusi regex, jika menemukan data sesuai pola, maka retrun true, jika tidak maka false
 */

/**
 * * RegExp Modifier
 * Memiliki modifier untuk merubah sifat pencarian
 ** Modifier    Keterangan
 * i            Regex menjadi incase sensitive
 * g            Pencarian dilakukan secara global, secara default setelah menemukan data, pencarian akan berhasil
 * m            Multiline, pencarian dilakukan di tiap baris (enter)
 */

//  Example 1

const regex1 = /[eko]/;
const regex2 = new RegExp("eko");
const regex3 = new RegExp(/[eko]/);
console.log(regex1);

//  Example 2
const text = "kurnawan eko eko khenedy";
const regex = /eko/;
let result = regex.exec(text);
console.log(result); // Output : array
console.log(regex.exec("Babi")); // Output : null

let test = regex.test(text);
console.log(test); // Output : true
console.log(regex.test("Babi")); // Output : false

//  Example 3
{
  const text = "eko kurniawan \neKo khanneedy\nEdi kurniawan jika kurniawan";
  const regex1 = /eko/g;
  const regex2 = /Kurniawan/gi;

  let result;
  while ((result = regex1.exec(text)) !== null) {
    console.log(result);
  }
  while ((result = regex2.exec(text)) !== null) {
    console.log(result);
  }
}

/**
 * Fiture RegExp lainnya yg lebih advence
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
 *
 ** Asserios : Indikasi awal dan akhir text
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions
 *
 ** Characcter Classes : membedakan antara huruf dan angka
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes
 *
 ** Group dan Range : melakukan grouping atau range huruf atau angka
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
 *
 ** Quantifies : Menentukan jumlah huruf atau angka
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers
 */
