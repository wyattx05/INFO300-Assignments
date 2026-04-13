const readline = require('readline-sync');

function getValidScore(prompt) {
    while (true) {
        let score = parseFloat(readline.question(prompt));
        if (!isNaN(score) && score >= 0 && score <= 100) {
            return score;
        }
        console.log("Invalid input. Score must be between 0 and 100.");
    }
}

function getLetterGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

let currentAvg = getValidScore("Enter your current average: ");

let input = readline.question(
    "Enter hypothetical final exam scores (comma-separated, e.g., 100,90,80): "
);

let scores = input.split(",");

console.log("\n=== Grade Forecast ===");

for (let s of scores) {
    let finalExam = parseFloat(s.trim());

     if (isNaN(finalExam) || finalExam < 0 || finalExam > 100) {
        console.log(`\nInvalid score skipped: ${s}`);
        continue;
    }

    let finalAvg = (currentAvg * 0.75) + (finalExam * 0.25);
    let finalLetter = getLetterGrade(finalAvg);

      let result;
    if (finalAvg > currentAvg) {
        result = "Improved";
    } else if (finalAvg < currentAvg) {
        result = "Declined";
    } else {
        result = "Stayed the same";
    }

    console.log("\n------------------------");
    console.log(`Final Exam Score: ${finalExam}`);
    console.log(`Final Course Average: ${finalAvg.toFixed(2)}`);
    console.log(`Letter Grade: ${finalLetter}`);
    console.log(`Result: ${result}`);
}
