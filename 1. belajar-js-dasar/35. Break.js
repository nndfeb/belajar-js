//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break

let counter = 1;
while (true) {
  console.log(`ke-${counter}`);
  counter++;
  if (counter >= 5) {
    break;
  }
}

function testBreak(x) {
  let i = 0;
  while (i < 6) {
    if (i === 3) {
      break;
    }
    i += 1;
  }
  return i * x;
}
console.log(testBreak(2)); // Output : 6
