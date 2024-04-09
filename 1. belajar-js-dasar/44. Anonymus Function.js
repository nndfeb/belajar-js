// https://developer.mozilla.org/en-US/docs/Glossary/Function

let say = function (name) {
  console.log(`Hello ${name}`);
};

say("nendi"); // Output : Hello nendi

//* Example 2
function giveMename(callback) {
  callback("eko");
}

giveMename(function (name) {
  console.log(`Hello ${name}`);
}); // Output : Hello eko
