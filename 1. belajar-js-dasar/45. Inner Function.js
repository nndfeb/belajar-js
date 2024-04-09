function outer() {
  function inner() {
    console.log("inner here!");
  }
  inner();
  inner();
}

outer();
inner(); // error
