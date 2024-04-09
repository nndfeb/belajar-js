function sayHello(name) {
  console.log(`Hello ${name}`);
}

let say = sayHello;
say("Nendi");

function giveMename(callback) {
  callback("Eko");
}

giveMename(sayHello);
