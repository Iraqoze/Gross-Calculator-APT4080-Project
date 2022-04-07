const {remote} = require('webdriverio');
const assert = require('assert');

let browser;
;(async () => {
    browser = await remote({
        capabilities: { browserName: 'chrome'}
    })

    await browser.navigateTo('https://netpay-calculator.herokuapp.com/')

    const nameInput = await browser.$('#basicPay')
    await nameInput.setValue('45000')

    const heightInput = await browser.$('#allowance')
    await heightInput.setValue('0')


    const calBtn = await browser.$('#calCalcute')
    await calBtn.click()

    const finalResponse = await browser.$('#response').getText();

    const pageTitle = await browser.getTitle();
    assert(finalResponse === 'Total Deductions (NHIF & NSSF) = 1300 Taxable Income = 43700 Take Home (Net Pay) 36475 Total Tax paid = 8525')


    await browser.deleteSession();
})().catch((err) => {
    console.error(err)
    return browser.deleteSession();
})
