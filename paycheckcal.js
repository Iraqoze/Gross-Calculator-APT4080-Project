const nssf = 200;
var nhif = 0;
function fetchDeductions(grossIncome) {
    
    let deduction = 0;

    if (grossIncome === 5999 || grossIncome < 5999) {
        nhif = 150;
        deduction = nssf + nhif;
    }
    else if (grossIncome === 6000 || grossIncome < 7999) {
        nhif = 300;
        deduction = nssf + nhif;
    }
    else if (grossIncome === 8000 || grossIncome < 11999) {
        nhif = 400;
        deduction = nssf + nhif;
    }

    else if (grossIncome === 12000 || grossIncome <= 14999) {
        nhif = 500;
        deduction = nssf + nhif;
    }

    else if (grossIncome === 15000 || grossIncome <= 19999) {
        nhif = 600;
        deduction = nssf + nhif;
    }
    else if (grossIncome === 20000 || grossIncome <= 24999) {
        nhif = 750;
        deduction = nssf + nhif;
    }
    else if (grossIncome === 25000 || grossIncome <= 29999) {
        nhif = 850;
        deduction = nssf + nhif;
    }
    else if (grossIncome === 30000 || grossIncome <= 34999) {
        nhif = 900;
        deduction = nssf + nhif;
    }
    else if (grossIncome === 35000 || grossIncome <= 39999) {
        nhif = 950;
        deduction = nssf + nhif;
    }
    else if (grossIncome === 40000 || grossIncome <= 44999) {
        nhif = 1000;
        deduction = nssf + nhif;
    }
    else if (grossIncome === 45000 || grossIncome <= 49999) {
        nhif = 1100;
        deduction = nssf + nhif;
    }
    else if (grossIncome === 50000 || grossIncome <= 59999) {
        nhif = 1200;
        deduction = nssf + nhif;
    }
    else if (grossIncome === 60000 || grossIncome <= 69999) {
        nhif = 1300;
        deduction = nssf + nhif;
    }
    else if (grossIncome === 70000 || grossIncome <= 79999) {
        nhif = 1400;
        deduction = nssf + nhif;
    }
    else if (grossIncome === 80000 || grossIncome <= 89999) {
        nhif = 1500;
        deduction = nssf + nhif;
    }
    else if (grossIncome === 90000 || grossIncome <= 99999) {
        nhif = 1600;
        deduction = nssf + nhif;
    }

    else {
        nhif = 17000;
        deduction = nssf + nhif;
    }

    return deduction;
}

function paycheckcal(basicSalary, bonuses) {
    console.log(basicSalary + " " + bonuses);
    const upto12298 = 0.1;
    const upto23885 = 0.15;
    const upto35472 = 0.2;
    const upto47059 = 0.25;
    const above47059 = 0.3;
    const relief = 2400;

    const grossIncome = basicSalary + bonuses;
    let netPay = 0;
    let payBeforeDeduction = 0;
    let taxableIncome = 0;

    let deductions = fetchDeductions(grossIncome);


    if (grossIncome >= 0 && grossIncome <= 12298) {
        taxableIncome = grossIncome - deductions;
        payee = taxableIncome * upto12298;
        payeeAfterReflief = payee - relief;
        netPay = grossIncome - payeeAfterReflief;
    } else if (grossIncome >= 12299 && grossIncome <= 23885) {
        taxableIncome = grossIncome - deductions;
        payee = taxableIncome * upto23885;
        payeeAfterReflief = payee - relief;
        netPay = grossIncome - payeeAfterReflief;
    } else if (grossIncome >= 23886 && grossIncome <= 35472) {
        taxableIncome = grossIncome - deductions;
        payee = taxableIncome * upto35472;
        payeeAfterReflief = payee - relief;
        netPay = grossIncome - payeeAfterReflief;
    }
    else if (grossIncome >= 35473 && grossIncome <= 47059) {
        taxableIncome = grossIncome - deductions;
        payee = taxableIncome * upto47059;
        payeeAfterReflief = payee - relief;
        netPay = grossIncome - payeeAfterReflief;
    }
    else if (grossIncome === 0) {
        taxableIncome = 0;
        payee = 0;
        payeeAfterReflief = 0;
        netPay = 0;
    }
    else {
        taxableIncome = grossIncome - deductions;
        payee = taxableIncome * above47059;
        payeeAfterReflief = payee - relief;
        netPay = grossIncome - payeeAfterReflief;
    }

    return "Total Deductions (NHIF & NSSF) = " + deductions + "  Taxable Income = "
        + taxableIncome + " Take Home (Net Pay) " + netPay + " Total Tax paid = " + payeeAfterReflief;

}               

module.exports = { paycheckcal, fetchDeductions };