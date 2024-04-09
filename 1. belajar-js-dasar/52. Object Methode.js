/**
 * ? Object Method
 * Pada tipe data object kita sudah membahas tentang property di object
 * function di object kadang disebut juga sebagai Object Method
 */

const person = {
  name: "eko",
  sayHello: function (name) {
    console.log(`Hallo ${name}`);
  },
};

person.sayHello("Nenid"); // Output : Hallo Nenid
console.log(person.name); // Output : eko

// Example 2
const mobil = {
  brand: "Honda",
};
mobil.createBrand = function (name) {
  console.log(`Hello ${name}`);
};
mobil.sayHello = (say) => console.log(`Hello ${say}`);

mobil.createBrand("Toyota"); // Output : Hello Toyota
mobil.sayHello("Nendi"); // Output : Hello Nendi
