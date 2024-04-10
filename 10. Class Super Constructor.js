/**
 *? Clas Super Constructor
 */

//  Parent
class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }
  sayHello(name) {
    console.log(`Hi ${name}, my name is Employee ${this.firstName}`);
  }
}

// Child
class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName); // super wajib ada di contructor childnya
    this.lastName = lastName;
  }
  sayHello(name) {
    console.log(
      `Hi ${name}, my name is Manager ${this.firstName} - ${this.lastName}`
    );
  }
}

const eko = new Manager("Eko", "Kurniawa");
// eko.name = "Eko"; // tidak usah karna sudah dilakukan di construcotr
eko.sayHello("Joko"); // Output : Hi Joko, my name is Manager Eko

const budi = new Employee("Budi", "Doremi");
// budi.name = "Budi"; // tidak usah karna sudah dilakukan di construcotr
budi.sayHello("SBY"); // Output : Hi SBY, my name is employee Budi
