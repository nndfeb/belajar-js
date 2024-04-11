// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/**
 * Array
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */

{
  // Array Loop
  const arr = ["eko", "kurniawan", "Khendy"];
  const items = [];
  //*   Example 1
  //   arr.forEach(function (value, index) {
  //     console.log(`${index} ${value}`);
  //   });

  //*   Example 2
  //   arr.forEach((value, index) => console.log(`${index} ${value}`));

  //*   Example 3
  arr.forEach((value) => console.log(`${value}`));

  //*   Example 4
  //   arr.forEach((item) => {
  //     items.push(item);
  //   });
  //   console.log(items);
}

{
  /**
   ** Array Queue
   * Dalam struktur data terdapat tipe data strukur data bernama Queue (Antrian)
   * Dimana data masuk akan diposisikan iurutan paling belakang
   * sedangkan data keluar akan diurutkan paling depan
   * mirip sekali dgn antrian  atau istirlahnya FIFO (first in first Out)
   * kita bisa menggunakan array dengan function push() untuk menambahkan data di belakang
   * dan shift() untuk mengambil data dan menghapus data paling depan
   * (url : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
   */

  const queue = [];
  queue.push("Eko");
  queue.push("Kuniwan");
  queue.push("Khendy");

  console.log(queue.shift()); // Output : Eko
  console.log(queue.shift()); // Output : Kurniawan
  console.log(queue.shift()); // Output : Khenedy
  console.log(queue.shift()); // Output : undefined
}

{
  /**
   ** Array Stack
   * Struktur data stack (tumpukan) kebalikan dari queue, atruan mirip dengan tumpukan kartu
   * saat memasukan data kita akan memasukan diurutan paling belakang (atau atas)
   * sedangkan saat kita mengambil data dari paling belakang terlebih dahulu
   * Stack ini sifatnya LIFO (last in first out)
   * untuk menambah diurutan paling belakang kita bisa menggunakana funtion push()
   * dan menggambil dan menghapus paling belakang kita bisa gunakan function pop()
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
   */

  const stack = [];
  stack.push("Eko");
  stack.push("Khendy");
  stack.push("Kurnawan");

  console.log(stack.pop()); // Output : Kurnawan
  console.log(stack.pop()); // Output : Khendy
  console.log(stack.pop()); // Output : Eko
  console.log(stack.pop()); // Output : undefined
}

{
  /**
   ** Array Search
   * Memiliki function untuk melakukan pencarian
   **   function                          | Keterangan
   *    find(value=>boolean): value         mencari data sesuai dgn kondisi (url : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
   *    findIndex(value=>boolean): number   mencari data index sesuai dgn kondisi (url : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
   *    includes(value): boolean            Mengecek apakah datanya ada (url : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
   *    indexOf(value): number              Mengecek posisi index dari data (url : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
   *    lastIndexOf(value): number          Mengecek posisi index data terakhir (url : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
   */

  const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  console.log(arr.find((value) => value > 3)); // Output : 4
  console.log(arr.findIndex((value) => value > 3)); // Output : 3
  console.log(arr.includes(7)); // Output : false
  console.log(arr.indexOf(5)); // Output : 4
  console.log(arr.lastIndexOf(4)); // Output : 8
}

{
  /**
   ** Array Filter
   *    Array memiliki function untuk melakukan filter
   *    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   **   Function                      |      Keterangan
   *    filter(value=>boolean):array         Melakukan filter data yg kondisinya bernilai true
   *
   * @return
   * Akan mengembalikan array baru
   */

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(numbers.filter((value) => value % 2 == 1)); // Output : [ 1, 3, 5, 7, 9 ]
  console.log(numbers.filter((value) => value % 2 == 0)); // Output : [ 2, 4, 6, 8, 10 ]
}

{
  /**
   ** Array Transform
   *
   *  Array juga memiliki function yang digunakan unutk melakukan transformasi
   ** Function                                        | Keterangan
   *  map(value=>result): Array<result>                 Melakukan transform tiap value dan menghasilkan array result
   *  reduce(resultBefore, value => result): result     Melakukan transform dengan menggunakan value array dan value selanjutnya lalu hasilnya dilanjutkan iterasi selanjutnya
   *  reduceRight(resultBefore, value => result)        Sama seperti reduce(), namun dilakukan dari belakang
   *
   * @method map
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   *
   * @method reduce
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   *
   * @method reduceRight
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight
   *
   */

  const names = ["eko", "kurianaw", "Khendy"];
  const upperName = names.map((value) => value.toUpperCase());
  console.log(upperName); // Output : [ 'EKO', 'KURIANAW', 'KHENDY' ]
  console.log(names); // Output : [ 'eko', 'kurianaw', 'Khendy' ]

  /**
   * @method reduce
   */
  // Example 1
  const nameReduce = names.reduce((before, next) => before + " " + next);
  console.log(nameReduce); // Output : eko kurianaw Khendy

  // Example 2
  const nameReduceRight = names.reduceRight(
    (before, next) => before + " " + next
  );
  console.log(nameReduceRight); // Output : Khendy kurianaw eko

  // Example 3
  const numbers = [1, 2, 3, 4, 5];
  const total = numbers.reduce((before, next) => before + next);
  console.log(total); // Output : 15
}
