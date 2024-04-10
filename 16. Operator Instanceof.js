// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

class Employee {}
// class Manager Employee {}
class Manager extends Employee {}

const eko = new Employee();
const budi = new Manager();

console.log(budi instanceof Employee); // Output : false
console.log(budi instanceof Manager); // Output : true
console.log(eko instanceof Manager); // Output : false
