const {Given, When, Then} = require('@wdio/cucumber-framework')
const MainPage = require('../pagefunctions/mainpage.function');


Given(/^a user clicks on the URL and accepts all cookies$/, async () => {
    await browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more");
    await MainPage.isBannerDisplayed();
        try {
            await MainPage.acceptAllCookies();
        } catch (e) {
            console.log('Something did not work');
        }
});

Then(/^the user verifies that the safety title exists$/, async () => {
    await MainPage.SafetyTitledisplay();
});

When(/^user verifies all tabs in the navigation bar are displayed and clickable$/, async() => {
    await MainPage.NavigationBar();
    await MainPage.OurCars();
    await MainPage.Shop();
    await MainPage.Owners();
    await MainPage.AboutUs();
});

Then(/^user checks footer$/, async () => {
    await MainPage.Footer();
});

Given(/^user checks all links under the Safety title$/, async() => {
    await MainPage.Overview();
    await MainPage.CultureAndVision();
    await MainPage.Features();
    await MainPage.ChildSafety();
    await MainPage.Research();
    await MainPage.Heritage();
});