/**
 * ? For Loop
 * salah satu kata kunci yang bisa digunakan untuk melakukan perulangan 
 * Blok code yang terdapat di dalam for akan selalu diulangi selama kondisi for terpenuhi
 * 
 * for (initialization; condition; afterthought)
  statement
 */

for (let counter = 1; counter <= 10; counter++) {
  console.log(`ke-${counter}`);
}

// Contoh lainnya
for (let i = 1; ; i++) {
  console.log(`ke-${i}`);
  if (i >= 3) break;
}

/**
 * You can also omit all three expressions. 
 * Again, make sure to use a break statement to end the loop and also modify (increase) a variable, 
 * so that the condition for the break statement is true at some point.

JS
 */

let i = 1;
for (;;) {
  if (i >= 3) break;
  console.log(`ke-${i}`);
  i++;
}

// Atau memanggil fungsi
for (let i = 0; i <= 3; i++) {
  setTimeout(() => {
    console.log(`ke-${i}`);
  }, 2000);
}

// atau satu ini

for (let angka = 2, getAngka = () => angka; angka < 5; angka++) {
  console.log(getAngka());
} // Output : 2 2 2

// Atau ini

const angka = [1, 2, 3, 4, 5, 6];
for (let a = 0, b = angka.length - 1; a < b; a++, b--) {
  console.log(angka[a], angka[b]);
}
