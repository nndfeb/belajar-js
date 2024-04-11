// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
{
  /**
   *? Obejct Freeze & Seal
   * Secara default, object bisa diubah atau dihapus propertinya
   * Jika kita ingin mengubah sebuah object yang tidak bisa diubah atau dihapus kita bisa menggunakan beberapa static method
   * Object.freeze() digunakan untuk mengubah object menjadi object yang tidak bisa diubah atau dihapus attribute nya (url : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
   * Object.seal() digunakan unutk mengubah object menjadi object yang tidak bisa dihapus attributenya (url : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)
   */

  const person = {
    firstName: "Eko",
    lsatName: "Khendy",
  };

  Object.freeze(person); // menjadikan person menjadi tidak bisa diubah dan dihapus

  person.middleName = "Joko"; // Output : Tidak bisa ditambahkan
  person.firstName = "Budi"; // Output : tidak bisa diubah
  delete person.lsatName; // Output : tidak bisa dihapus
  console.log(person); // Output : { firstName: 'Eko', lsatName: 'Khendy' }

  //? Obejct Seal ->

  const buah = {
    namaBuah: "Apple",
    price: 15000,
  };
  Object.seal(buah); // menjadikan buah menjadi tidak bisa haspus namun bisa diubah

  buah.namaBuah = "Jeruk";
  buah.warnaBuah = "Orange"; // Output : Tidak bisa ditambahkan
  delete buah.price; // Output : tidak bisa dihapus
  console.log(buah); // Output : { namaBuah: 'Jeruk', price: 15000 }
}

{
  /**
   *? Obejct Assign
   * Kadang kita ada kasus menggabungkan semua attribute dari sebuah object ke object lain
   * hal ini bisa kita lakukan dengan menggunakan
   ** Object.assign(target, source)
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
   */

  const target = { firstName: "Eko" };
  const source = {
    firstName: "Dede",
    lsatName: "Joko",
  };
  Object.assign(target, source);
  console.log(target); // Output : { firstName: 'Dede', lsatName: 'Joko' }
  console.log(source); // Output : { firstName: 'Dede', lsatName: 'Joko' }
}

{
  /**
   * ? Obejct Property Name & Value
   * Obejct juga memiliki static method untuk digunakan mengambil semua properties names dan value
   * Object.values() digunakan untuk mengambil semua property value (url : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
   * Obejct.getOwnPropertyNames() digunakan untuk mengmbil semua property name (url : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
   */

  const person = {
    firstName: "Eko",
    lsatName: "Khenedy",
  };

  console.log(Object.values(person)); // Output : [ 'Eko', 'Khenedy' ]
  console.log(Object.getOwnPropertyNames(person)); // Output :[ 'firstName', 'lsatName' ]
}
