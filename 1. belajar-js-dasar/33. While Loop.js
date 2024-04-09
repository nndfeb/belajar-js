/**
 *? While Loop
* The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. 
* The condition is evaluated before executing the statement.
 
while (condition)
  statement
 */

let n = 0;
while (n < 5) {
  console.log(`ke-${n}`);
  n++;
}
console.log(n); // Output : 3

let a = 0;
let b = 0;
while (a < 5) {
  a++;
  console.log(`${a}`);
  b += a;
  console.log(`ke-${b}`);
}
