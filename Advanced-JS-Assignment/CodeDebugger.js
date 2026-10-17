const readlineSync = require('readline-sync');

let start = readlineSync.question("Enter start number: ");
let end = readlineSync.question("Enter end number: ");

let count = 0;
for (let i = start; i <= end; i++) {
  if (i % 2 == 0) { // Fixed it from being i / 2 == 0 to i % 2 == 0 the correct way to check if a number is even.
    count += 1; // Fixed it from being =+ 1 to += 1 the correct way to increment the count variable.
  }
}

console.log("Even numbers between " + start + " and " + end + ": " + count);

