// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction

// * Example 1
function* createName() {
  yield "Eko";
  yield "Kurniawan";
  yield "Khendey";
}
console.log(createName()); // Output : Object [Generator] {}
const names = createName();
for (const name of names) {
  console.log(name);
}

// * Example 2
function* ganjil(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 == 1) yield i;
  }
}
const angkaGanjil = ganjil(10);
for (angka of angkaGanjil) {
  console.log(angka); // Output : 1 3 5 7 9
}

// * Example 3
const GeneratorFunction = function* () {}.constructor;
const foo = new GeneratorFunction(`
  yield 'a';
  yield 'b';
  yield 'c';
`);

let str = "";
for (const val of foo()) {
  str = str + val;
}

console.log(str);
// Expected output: "abc"
