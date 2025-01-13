exports.config = {
    runner: 'local',
    specs: ['./components/features/*.feature'], // Path to feature files
    exclude: [],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless', '--disable-gpu', '--window-size=1920x1080']
            }
        },
    ],
    logLevel: 'debug',
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./components/stepdefinitions/*.js'], // Path to step definition files
        backtrace: false,
        requireModule: [],
        dryRun: false,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },

    reporters: [
        ['@rpii/wdio-html-reporter', {
            outputDir: './reports/html-reports',
            filename: 'report.html',
            reportTitle: 'My Test Report',
            showInBrowser: true,
        }]
    ],

    afterTest: async function (test) {
        const path = require('path');
        
        // Define the screenshot path (in the 'screenshots' folder)
        const screenshotPath = path.join(__dirname, 'screenshots', `${test.title.replace(/\s+/g, '_')}.png`);

        // Capture and save the screenshot after each test
        await browser.saveScreenshot(screenshotPath);
        console.log(`Screenshot saved to: ${screenshotPath}`);
    },
};