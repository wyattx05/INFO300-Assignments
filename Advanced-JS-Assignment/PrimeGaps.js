var readlinesync = require('readline-sync');

var n;
var primes = [];
var i;
var j;
var isPrimeFlag;
var maxGap = 0;
var totalGaps = 0;
var count = 0;
var gap;
var avgGap;
var maxGapStart = null;
var maxGapEnd = null;

do {
    n = Number(readlinesync.question("Enter a positive integer (<=1000): "));
} while (n <= 0 || n > 1000);

for (i=2; i <= n; i++) {
    isPrimeFlag = true;

    for (j=2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrimeFlag = false;
            break;
        }
    }

    if (isPrimeFlag) {
        primes.push(i);
    }
}

for (i=1; i < primes.length; i++) {
    gap = primes[i] - primes[i-1];
    
    if (gap > maxGap) {
        maxGap = gap;
        maxGapStart = primes[i - 1];
        maxGapEnd = primes[i];
    }

    totalGaps += gap;
    count++;

}

if (count > 0) {
    avgGap = (totalGaps / count).toFixed(2);
} else {
    avgGap = 0;
}

if (primes.length > 0) {
    console.log("Prime numbers between 2 and " + n + ": " + primes.join(", "));
} else {
    console.log("No prime numbers found in range.");
}

if (maxGapStart !== null) {
    console.log("Largest gap is between " + maxGapStart + " and " + maxGapEnd + " (gap: " + maxGap + ")");
} else {
    console.log("Largest gap: 0 (not enough prime numbers)");
}
console.log("Average gap: " + avgGap);