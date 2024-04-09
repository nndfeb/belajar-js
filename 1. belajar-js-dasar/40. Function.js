// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

function sayHello() {
  console.log(`Hello nendi`);
}

console.log(sayHello());

// * Example 1 | Try It get Rectangle Area

const getRectangleArea = function (width, length) {
  return width * length;
};
console.log(getRectangleArea(3, 4)); // Output : 12

// * Example 2 | function return value

function helloWord(a, b) {
  return `Hello ${a} ,di ${b}`;
}
const panggilDia = (fn = (a, b) => {
  return `Hello ${a} ,di ${b}`;
});

console.log(helloWord("Rindi", "JKT")); // Output : Hello Rindi ,di JKT
console.log(panggilDia("Kiki", "BDG")); // Output : Hello Kiki ,di BDG

// Mencari nilai array
function isContaint(array, searchArray) {
  for (const element of array) {
    if (element === searchArray) return true;
  }
  return false;
}

console.log(isContaint([1, 2, 3, 4], 9));
