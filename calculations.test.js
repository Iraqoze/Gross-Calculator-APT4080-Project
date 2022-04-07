const { paycheckcal, fetchDeductions } = require("./paycheckcal");


//Deduction Test cases
test('Check Deductions when Gross Income is Less or Equal to 5999', () => {
    expect(fetchDeductions(4000)).toBe(350);
});

test('Check Deductions when Gross Income is equal 6000 or less than 7999', () => {
    expect(fetchDeductions(7000)).toBe(500);
});

test('Check Deductions when Gross Income is equal to 8000 or less than 11999', () => {
    expect(fetchDeductions(10000)).toBe(600);
});
test('Check Deductions when Gross Income is equal to 12000 or to less than 14999', () => {
    expect(fetchDeductions(13000)).toBe(700);
});

test('Check Deductions when Gross Income is equal to 15000 or less than 19999', () => {
    expect(fetchDeductions(17000)).toBe(800);
});

test('Check Deductions when Gross Income is equal to 20000 or less than 24999', () => {
    expect(fetchDeductions(23000)).toBe(950);
});

test('Check Deductions when Gross Income is equal to 25000 or less than 29999', () => {
    expect(fetchDeductions(26000)).toBe(1050);
});

test('Check Deductions when Gross Income is equal to 30000 or less than 39999', () => {
    expect(fetchDeductions(36000)).toBe(1150);
});

test('Check Deductions when Gross Income is equal to 40000 or less than 45999', () => {
    expect(fetchDeductions(42000)).toBe(1200);
});
test('Check Deductions when Gross Income is equal to 45000 or less than 49999', () => {
    expect(fetchDeductions(47000)).toBe(1300);
});
test('Check Deductions when Gross Income is equal to 50000 or less than 59999', () => {
    expect(fetchDeductions(52000)).toBe(1400);
});
test('Check Deductions when Gross Income is equal to 60000 or less than 69999', () => {
    expect(fetchDeductions(63000)).toBe(1500);
});
test('Check Deductions when Gross Income is equal to 70000 or less than 79999', () => {
    expect(fetchDeductions(72000)).toBe(1600);
});
test('Check Deductions when Gross Income is equal to 80000 or less than 89999', () => {
    expect(fetchDeductions(84000)).toBe(1700);
});
test('Check Deductions when Gross Income is equal to 90000 or less than 99999', () => {
    expect(fetchDeductions(94000)).toBe(1800);
});
test('Check Deductions when Gross Income is equal to 100000 or Greater', () => {
    expect(fetchDeductions(150000)).toBe(17200);
});

//Pay Check Tests
test('Paycheck when the gross income greater than 0 and less or equal to 12298', () => {
    expect(paycheckcal(10000, 1000)).toBe("Total Deductions (NHIF & NSSF) = " + 600 + " Taxable Income = "
        + 10400 + " Take Home (Net Pay) " + 12360 + " Total Tax paid = " + -1360);

});

test('Paycheck when the gross income is greater than 12299 and less or equal to 23885', () => {
    expect(paycheckcal(22000, 500)).toBe("Total Deductions (NHIF & NSSF) = " + 950 + " Taxable Income = "
        + 21550 + " Take Home (Net Pay) " + 21667.5 + " Total Tax paid = " + 832.5);

});
test('Paycheck when the gross income is greater than 23885 and less or equal to 35472', () => {
    expect(paycheckcal(30000, 3500)).toBe("Total Deductions (NHIF & NSSF) = " + 1100 + " Taxable Income = "
        + 32400 + " Take Home (Net Pay) " + 29420 + " Total Tax paid = " + 4080);

});
test('Paycheck when the gross income is greater than 35472 and less or equal to 47059', () => {
    expect(paycheckcal(41000, 2500)).toBe("Total Deductions (NHIF & NSSF) = " + 1200 + " Taxable Income = "
        + 42300 + " Take Home (Net Pay) " + 35325 + " Total Tax paid = " + 8175);

});
test('Paycheck when the gross income is above 47059', () => {
    expect(paycheckcal(60000, 5000)).toBe("Total Deductions (NHIF & NSSF) = " + 1500 + " Taxable Income = "
        + 63500 + " Take Home (Net Pay) " + 48350 + " Total Tax paid = " + 16650);

});