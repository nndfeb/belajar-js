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

{
  // Advenced Regex

  const regex = /ek[aiueo]/gi;
  const names = "eka eki EKo eko euk edo eco echo";
  let result;
  while ((result = regex.exec(names)) !== null) {
    console.log(result);
  }
}

{
  /**
   ** Reguler Expression di Stirng
   * Di JS tipe data stirng memiliki instance method yang dapat memanfaatkan RegExp unutk melakukan pencarian
   */
  /**
   ** String Method                  Keterangan
   * match(regex):Array             Mencari semnua data yang sesaui dengan regex
   * search(regex) : index          Mencari index data yang sesuai dengan Regex
   * replace(regex, value)          Mengubah data dengan value seusai regex
   * replaceAll(regex, value)       Mengubah semua data dengan value seusai regex
   * split(regex):Array             Memotong string dengan regex
   */

  const names = "edo eka eki EKo eko euk edo eco echo";
  const text = "#tiktok #instagram merupakan app medsos";
  console.log(names.match(/ek[aiueo]/gi)); // Output : [ 'eka', 'eki', 'EKo', 'eko' ]
  console.log(names.search(/ek[aiueo]/gi)); // Output : 4
  console.log(text.replace(/#./gi, "<a href='#' >url</a>"));
  console.log(names.split(/e/gi));
}
