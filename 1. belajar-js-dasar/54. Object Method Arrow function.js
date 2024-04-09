/**
 * Arrow funtion tidak bisa digunakan sebagai object method
 */

const person = {
  name: "nedi",
  sayHello: (name) => {
    console.log(this); // Output : window
    console.log(`Hello ${name}`);
  },
  singing: function (name) {
    console.log(this);
    console.log(`Singing ${name}`);
  },
};

person.sayHello("Budi"); // Output : Hello Budi
person.singing("Inggris"); // Output : Singing Inggris
