/*Acceptance test script*/
const {remote} = require('webdriverio');
const assert = require('assert');

let browser;
;(async () => {
    browser = await remote({
        capabilities: {
            maxInstances: 1,
            browserName: process.env.BROWSER || "chrome",
            chromeOptions: {
                args: ["--headless", "--disable-gpu", "--window-size=1920,1200", "--no-sandbox"]
            }
        }
    })
/**Navigating to the weppage on heroku */
    await browser.navigateTo('https://netpay-calculator.herokuapp.com/')

/** locating the input box for basic salary and entering the value in it*/
    const nameInput = await browser.$('#basicPay')
    await nameInput.setValue('45000')

/** locating the input box for allowances  and entering the value in it*/
    const heightInput = await browser.$('#allowance')
    await heightInput.setValue('0')

/**Clicking the button to calculate the net pay */
    const calBtn = await browser.$('#calCalcute')
    await calBtn.click()

/** Locating the respose from the result and getting the test in it*/
    const finalResponse = await browser.$('#response').getText();

/**Asserting that indeed the response their is matches the below*/
    const pageTitle = await browser.getTitle();
    assert(finalResponse === 'Total Deductions (NHIF & NSSF) = 1300 Taxable Income = 43700 Take Home (Net Pay) 36475 Total Tax paid = 8525')

/**If the above case fails , we expect an error so here we handle it */
    await browser.deleteSession();
})().catch((err) => {
    console.error(err)
    return browser.deleteSession();
})
