//

/**
 *? Map
 * Map merupakan representasi dari struktur data key-value
 * Map mirip dengan tipe data object, hanya saja pada Map semua method unutk menipulasi data sudah disediakan
 * Map mengikuti kontrak iterable, sehingga bisa di iteraisecara default
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Maphttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 */

/**
 **     Map :
 *      1. Pertama dibuat tidak memiliki key
 *      2. Key bisa tipe data apapun
 *      3. Jumlah key bisa diketahui dengan mudah menggunakan attribue size
 *      4. secara default tidak bisa dikonversi ke JSON
 *
 **     Object :
 *      1. Karena memiliki prototype bisa jadi memiliki default key ketika pertama dibuat
 *      2. Key hanya bisa string atau symbol
 *      3. Tidak bisa diketahui harus menual menggunakan iterasi
 *      4. Bisa dikonversi ke JSON secara otomatis
 */

/**
 ** Map Instance Method & Property
 * Method & Property                    Keterangan
 * size                                 Panjang Map
 * clear                                Menghapus semua isi Map
 * delete(key)                          Menghapus data map berdasarkan key
 * get(key):value                       Mendapatkan data Map berdasarkan key
 * has(key):boolean                     Mengecek apakah map berisi data key
 * set(key, value)                      Mengubah data Map dengan key = value
 * forEach((key,value)=>)               Melakukan iterasi Map
 */

const maps = new Map();
maps.set("Name", "Eko");
maps.set("Address", "Karwang");

console.log(maps); // Output : Map(2) { 'Name' => 'Eko', 'Address' => 'Karwang' }

console.log(maps.get("Name")); // Output : Eko
console.log(maps.get("Address")); // Output : Karwang

for (const element of maps) {
  console.log(`${element[0]} : ${element[1]}`);
}
/** Output :
Name : Eko
Address : Karwang
 */

maps.forEach((key, value) => console.log(`${key} : ${value}`));
/** Output :
Name : Eko
Address : Karwang
 */
