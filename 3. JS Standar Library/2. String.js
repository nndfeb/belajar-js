// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const stringName = "Eko Kurniawan Khenedy";
console.info(stringName.length); // Output : 21
console.info(stringName.toUpperCase()); // Output : EKO KURNIAWAN KHENEDY
console.info(stringName); // Output : Eko Kurniawan Khenedy
console.info(stringName.toLowerCase()); // Output : eko kurniawan khenedy
console.info(stringName); // Output : Eko Kurniawan Khenedy
console.info(stringName.split(" ")); // Output : [ 'Eko', 'Kurniawan', 'Khenedy' ]
console.info(stringName); // Output : Eko Kurniawan Khenedy

const input = "          data disini      . ";
console.info(input.trim()); // Output : data disini
console.log(input); // Output :          data disini      .
