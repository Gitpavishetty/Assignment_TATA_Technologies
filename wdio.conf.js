exports.config = {
    runner: 'local',
    specs: ['./components/features/*.feature'], // Path to feature files
    exclude: [],
    maxInstances:3,
    capabilities: [
        {
            maxInstances: 3,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--head', '--disable-gpu', '--window-size=1920x1080']
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
        tagExpression: '@check-barfooter or @check-links',
        timeout: 600000,
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
};