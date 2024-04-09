// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue

let text = "";
for (let i = 0; i < 10; i++) {
  if (i == 3) {
    continue; // sama saja denagn skip
  }
  if (i == 1) {
    continue; // sama saja denagn skip
  }
  text = text + i;
}
console.log(text); // Output : 02456789

// Sisa bagi dengan continue
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`ke-${i}`); // Output :  ke-1 ke-3 ke-5
}

// Sisa Bagi
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) console.log(`ganjil ke-${i}`);
  if (i % 2 == 0) console.log(`genap ke-${i}`);
}

// memisahkan array ganjil genap
let genap = [];
let ganjil = [];
for (i = 1; i <= 10; i++) {
  if (i % 2 == 1) ganjil.push(i);
  if (i % 2 == 0) genap.push(i);
}
console.log(`ganjil ${ganjil}`);
console.log(genap);
