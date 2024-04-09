// https://developer.mozilla.org/en-US/docs/Glossary/Scope

// Global sope

let counter = 0;
function hitMe() {
  // local scope
  counter++;
}
// Global scope
function other() {}

hitMe();
hitMe();
hitMe();

console.log(counter);
