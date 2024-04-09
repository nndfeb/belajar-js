const person = {
  firstName: "eko",
  lastName: "Kurianawan",
  get getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set setFullName(value) {
    const array = value.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  },
};
// Getter
console.log(person.getFullName); // Output : eko Kurianawan

// Setter
person.setFullName = "Nendi Febri";
console.log(person.firstName); // Output : Nendi
console.log(person.lastName); // Output : Febri
// Getter
console.log(person.getFullName); // Output : Nendi Febri
