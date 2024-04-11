{
  /**
   *? BigInt
   * Meupakan tipe data Number ynag bisa mencakup data angka lebih dari
   * Number.MAX_SAFE_INTEGER
   * unutk kasus numbr yg lebih dari itu, sangat disarankan menggunakan tipe data BigInt
   * Cara penggunaan BigInt sama dengan menggunakan Number dan juga Operatornya
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
   */

  //   console.log(Number.MAX_SAFE_INTEGER); // Output : 9007199254740991

  const x = Number.MAX_SAFE_INTEGER;
  const a = BigInt(Number.MAX_SAFE_INTEGER);
  const b = BigInt(Number.MAX_SAFE_INTEGER);
  const c = a + b;
  console.log(c); // Output : 18014398509481982n
  console.log(x); // Output : 9007199254740991
  console.log(typeof c); // Output : bigint
  console.log(typeof x); // Output : number
}
