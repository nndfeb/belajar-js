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

  console.log(new Date());
}
