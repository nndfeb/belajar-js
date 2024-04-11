{
  /**
   * ? JSON
   * Javascript Obejct Notation (url : https://www.json.org)
   * Js mendukung konversi data dari string json ke Object ataupun sebaliknya
   * JSON.stringify() digunakan untuk melakukan konversi dari Object ke string (utl : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
   * JSON.parse() digunakan untuk melakukan konversi String ke Obejct (url : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
   */

  const person = {
    firstName: "Eko",
    lastName: "Khandey",
    address: {
      country: "Indonesia",
      city: "Subang",
    },
    hobbies: ["Coding", "Game", "Traveling"],
  };
  console.log(person);

  const convertJsonToString = JSON.stringify(person);
  console.log(convertJsonToString);

  const convertStringToJson = JSON.parse(convertJsonToString);
  console.log(convertStringToJson);
}
