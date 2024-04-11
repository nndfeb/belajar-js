/**
 * Set merupakan implemntasi dari struktur data yang berisikan data-data uniqe
 * set mirip seprti array hanya saja datanya selalu unique
 * jika kita menambahkan data yang sama maka data akan diterima hanya satu saja
 * set mengimplemntasikan kontak iterable, sehigga bisa diiterasi secara default
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

/**
 * Set Instance Method & Property
 * Method & Property        Keterangan
 * sieze                    Panjang Set
 * add(value)               Menambah data ke Set
 * has(value)               Mengecek apakah Set memiliki value
 * delete(value)            Menghapus value dari Set
 * forEach(value=>)         Melakukan Iterasi Set
 */

const set = new Set();
set.add("EKo");
set.add("EKo");
set.add("EKo");
set.add("Kurniawan");

set.forEach((value) => console.log(value)); // Output : Eko, Kurniawan
