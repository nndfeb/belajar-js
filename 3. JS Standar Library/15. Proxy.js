/**
 ** Proxy
 * Proxy merupakan fitur yang bsia digunakan sebagai wakil sebuah data
 * Denagan menggunakan proxy, smeua interaksi data akan selalu melalui Proxy terlebih dahulu
 * Deangan ini kita bisa melakukan apapun sebelum interaksi dilakukan ke data yang dituju
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 */

/**
 ** Proxy Handler
 * Pembuatan proxy perlu menggunakan handler, dimna dala handler kita bisa membuat function yang dinamakan interceptor yang digunakan ketika kita mengambil data atau mengubah data ke target
 * Untuk membuat proxy kita bsa menggunakan new Proxy(target, hendler)
 */

{
  const target = {
    middleName: "Khendy",
  };
  const handler = {
    get: function (target, property) {
      console.log(`Access proprty : ${property}`);
      return target[property];
    },
    set: function (target, property, value) {
      console.log(`change proprty : ${property} : ${value}`);
      if (value == null) {
        target[property] = "defeult";
        // throw new Error("Tidak boleh null");
      } else {
        target[property] = value;
      }
    },
  };

  const proxy = new Proxy(target, handler);
  proxy.firstName = "Eko"; // nge Set
  proxy.lastName = null;
  //   proxy.lastName = "Kurniawan"; // nge Set

  console.log(proxy.firstName); // Output : Eko
  console.log(proxy.middleName); // Output : Khendy
  console.log(proxy.lastName); // Output : Kurniawan

  /**
   * Penjelasan:
   * Saat kita mngubah data proxy, secara otomatis data akan dikirim ke target melalui hendler
   * dengan memanggil function set(target, property, value)
   * Saat kita mengambil data proxy, secara otomatis data akan diambil dari target melalui handler dengan memanggil fucntion get(target, property)
   * Artinya, jika kita ingin melakukan sesatu sebelum dan setelah nya kita bisa lakukan di hendler
   */
}
