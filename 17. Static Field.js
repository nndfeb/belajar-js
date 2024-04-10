// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
/**
 * Static Field
 */

class Config {
  name = "Belajar JS OOP";
  version = 1.0;
  author = "Eko";
}

const initConfig = new Config();
console.log(initConfig); // Output : Config { name: 'Belajar JS OOP', version: 1, author: 'Eko' }

// Example | Static
class JS {
  static name = "Belajar JS";
  static version = 1.0;
  static author = "Nendi";
}

JS.author = "Dede";

console.log(JS.name);
console.log(JS.author);
