/**
 * ? Type Data Array
 * Array adalah tipe data berisikan data
 * Array di JS memiliki sifat dinamis
 * artinya datanya bisa bertambah dengan sendirinya saat kita memasukan data ke dalam array
 * otomatis data akan disimpan di urutan terakhir
 * Setiap array dimulai dari urutan ke-0
 * Urutan array disebut index
 */

let arrayKosong = [];
let arrayMhs = ["Eko", "Kurniawan", "Khendry", 1, true];
console.log(arrayMhs); // Output : [ 'Eko', 'Kurniawan', 'Khendry', 1, true ]

// Menambah data array
arrayMhs.push("Nedni");
arrayMhs.push("Aisayh", "Riri");
console.table(arrayMhs); // Output : [ 'Eko', 'Kurniawan', 'Khendry', 1, true,'Nedni','Aisayh','Riri']

/**
 * ? Operasi di Array
 *
 **  Operasi             |       Keterangan
 *  array.push(value)           menambah data ke array
 *  array.length                mendapatkan panjang array
 *  array[index]                mendapatkan data di posisi index
 *  array[index] = value        mengubah data di posisi index
 *  delete array[index]         menghapus data di posisi index tetapi data tidak bergeser
 */

let dataArray = ["ke-1", "ke-2", "ke-3", "ke-4", "ke-5"];
console.log(dataArray); // Output : [ 'ke-1', 'ke-2', 'ke-3', 'ke-4', 'ke-5' ]

// Mengubah data
dataArray[0] = "Berubah";
dataArray[3] = "Berubah lagi";
console.log(dataArray); // Output : [ 'Berubah', 'ke-2', 'ke-3', 'Berubah lagi', 'ke-5' ]

delete dataArray[3];
console.log(dataArray); // Output : [ 'Berubah', 'ke-2', 'ke-3', <1 empty item>, 'ke-5' ]

dataArray[3] = "Berubah lagi";
console.log(dataArray); // Output : [ 'Berubah', 'ke-2', 'ke-3', 'Berubah lagi, 'ke-5' ]
