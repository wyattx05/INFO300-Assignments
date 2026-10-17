const readline = require('readline-sync');

let employees = [];

function getValidWage() {
    while (true) {
        let wage = parseFloat(readline.question("Enter hourly wage: "));
        if (!isNaN(wage) && wage > 0) {
            return wage;
        } else {
            console.log("Invalid input. Please enter a positive number for wage.");
        }
    }
}

function getValidHours() {
    while (true) {
        let hours = parseFloat(readline.question("Enter hours worked (0-80): "));
        if (!isNaN(hours) && hours >= 0 && hours <= 80) {
            return hours;
        }
        console.log("Invalid input. Hours must be between 0 and 80.");
    }
}

for (let i = 0; i < 3; i++) {
    console.log(`\nEmployee #${i + 1}`);
    
    let name = readline.question("Enter employee name: ");
    let wage = getValidWage();
    let hours = getValidHours();

    let regularHours = Math.min(hours, 40);
    let overtimeHours = hours > 40 ? hours - 40 : 0;

    let regularPay = regularHours * wage;
    let overtimePay = overtimeHours * wage * 1.5;
    let totalPay = regularPay + overtimePay;

    employees.push({
        name,
        hours,
        regularPay,
        overtimePay,
        totalPay
    });
}

let highestPaid = employees[0];
for (let emp of employees) {
    if (emp.totalPay > highestPaid.totalPay) {
        highestPaid = emp;
    }
}
console.log("\n=== Payroll Report ===");

for (let emp of employees) {
    console.log("\n------------------------");
    console.log(`Name: ${emp.name}`);
    console.log(`Total Hours: ${emp.hours}`);
    console.log(`Regular Pay: $${emp.regularPay.toFixed(2)}`);
    console.log(`Overtime Pay: $${emp.overtimePay.toFixed(2)}`);
    console.log(`Total Pay: $${emp.totalPay.toFixed(2)}`);

    if (emp === highestPaid) {
        console.log("*** Highest Paid Employee ***");
    }
}
