/**
 *? Falsy
 * Falsy atau kadang ditulis falsey dalah value yang ketika didakam konteks boolean dia diangap false
 * ini adalah salah astu fiture unik dari javascript, yang berguna namun kdang membingungkan
 * jadi JS, kondisi itu tidak hanya bisa boolean tapi diluar boolean pun bisa, namun kita harus tahu beberapa data falsy atau dainggap flase
 */

/**
 * Data dianggap falsy      |       Keterangan
 * false                            Boolean false
 * 0, -0                            Number 0 dan -0 dainggap false
 * 0n                               Biginteger 0n dainggap false
 * "", '', ``                       Semua string kosong dainggap false
 * null                             null kosong dainggap false
 * undifiend                        undifiend dainggap false
 * NaN                              NaN dainggap false
 */
if (false) {
  console.log("hello");
  // Not reachable
}

if ("") {
  console.log("hello");
  // Not reachable
}

if (null) {
  console.log("hello");
  // Not reachable
}

if (0) {
  console.log("hello");
  // Not reachable
}
if (NaN) {
  console.log("hello");
  // Not reachable
}
if (undefined) {
  console.log("hello");
  // Not reachable
}

/**
 * ? Truthy
 * Dalah kebalikan dari falsy dimana data yang dianggap bernilai true
 * sederhana sekali sebenarnya unutk mengatahui sebuah data itu truthy, yaitu data yang bukan bernilai falsy
 *
 */

if ({}) {
  console.log("hello");
} // Output : hello

if ([]) {
  console.log("hello");
} // Output : hello

if (1) {
  console.log("hello");
} // Output : hello

if ("false") {
  console.log("hello");
} // Output : hello
