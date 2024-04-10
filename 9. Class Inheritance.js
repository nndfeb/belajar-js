class Employee {
  sayHello(name) {
    console.log(`Hi ${name}, my name is employee ${this.name}`);
  }
}

class Manager extends Employee {
  sayHello(name) {
    console.log(`Hi ${name}, my name is Manager ${this.name}`);
  }
}

const eko = new Manager();
eko.name = "Eko";
eko.sayHello("Joko"); // Output : Hi Joko, my name is Manager Eko

const budi = new Employee();
budi.name = "Budi";
budi.sayHello("SBY"); // Output : Hi SBY, my name is employee Budi
