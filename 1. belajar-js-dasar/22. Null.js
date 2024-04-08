/**
 * ? Null
 * Merupakan representasi data kosong
 * null berbeda dangan undefined, null berarti variable yang sudah ditambahkan valuenya, hanya aja valuenya null
 * sedangkan undefined adalah variable belum ditambahkan valuenya
 */

let firstName = null;

if (firstName == null) {
  console.log("is null");
} else if (firstName == undefined) {
  console.log("is undifiend");
} else {
  console.log("bukan kedaunya");
}

// Output : is null
