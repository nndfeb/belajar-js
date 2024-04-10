class Cunstomer {
  firstName;
  lastName;
  balance = 0;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {}
}

const eko = new Cunstomer("EKo", "Khendy");
console.log(eko); // Output : Cunstomer { firstName: 'EKo', lastName: 'Khendy', balance: 0 }

const budi = new Cunstomer("Budi", "Doremi");
console.log(budi); // Output : Cunstomer { firstName: 'Budi', lastName: 'Doremi', balance: 0 }
