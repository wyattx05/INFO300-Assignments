var readlinesync = require('readline-sync');

var nInput = readlinesync.question('Enter the number of Fibonacci numbers you want to generate: ');
var n = parseInt(nInput, 10);

function generateFibonacci(n) {
    if (n === 1) {
        return [0];
    }

    var fib = [0, 1];
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

function getOddFibonacci(numbers) {
    var oddNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }
    return oddNumbers;
}

if (isNaN(n) || n <= 0) {
    console.log('Please enter a whole number greater than 0.');
} else {
    var fullSequence = generateFibonacci(n);
    var oddFibonacci = getOddFibonacci(fullSequence);

    console.log('Full sequence: ' + JSON.stringify(fullSequence));
    console.log('Odd Fibonacci numbers: ' + JSON.stringify(oddFibonacci));
}