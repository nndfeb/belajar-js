// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label

loopi: for (let i = 0; i < 5; i++) {
  loopj: for (let j = 0; j < 3; j++) {
    console.log(`ke-${i} - ${j}`);
  }
}

// Menggunakan continue
loopi: for (let i = 0; i < 10; i++) {
  loopj: for (let j = 0; j < 20; j++) {
    if (j > 5) continue loopi;
    console.log(`ke-${i} - ${j}`);
  }
}

//Using a labeled continue with for loops
loop1: for (let i = 0; i < 3; i++) {
  loop2: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log(`i=${i}, j=${j}`);
  }
}
