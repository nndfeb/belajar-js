{
  /**
   * Date
   * Js memiliki tipe data nutk merepresentasikan waktu dan tangal yaitu Date
   * Date merupakan representasi milisecod sejak tgl 1 januari 1970 atau dikenal dengan Epoch & Unik Timestamp
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
   * Untuk membaut obejct Date kita bisa menggunakan new Date() dimna terdapat constructor parameter
   **   Obejct                                                           |       Desc
   *    new Date()                                                       |       Membuat date saat ini
   *    new Date(year, month, date)                                      |       Membuat date dengan tanggal
   *    new Date(year, month, date?, hour?, minute?, second?, milis?)    |       Membuat date dengan parameter sampai milis
   *    new Date(timestamp)                                              |       Membuat date dari epoch atau unix timestamp
   */

  const date1 = new Date();
  console.log(date1);

  const date2 = new Date(2024, 8, 11);
  console.log(date2);

  const date3 = new Date(1712813982843);
  console.log(date3);

  //   Example
  const timestamp = Date.now();
  console.log(timestamp);
  const dateUnix = new Date(timestamp);
  console.log(dateUnix.getTime());
}
