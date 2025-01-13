const {Given, When, Then} = require('@wdio/cucumber-framework')
const MainPage = require('../pagefunctions/mainpage.function');
const mainpage = require('../web_elements/mainpage');

Given(/^a user clicks on the URL and accepts all cookies$/, async () => {
    await browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more");
    const isCookieBannerDisplayed = await MainPage.isBannerDisplayed();
    if (isCookieBannerDisplayed) {
        await MainPage.acceptAllCookies(); 
    }
});

Then(/^the user verifies that the safety title exists$/, async () => {
    await MainPage.SafetyTitledisplay()
});

When(/^user verifies all tabs in navigation bar are displayed and clickable$/, async() => {
    await MainPage.NavigationBar();
    await MainPage.OurCars();
    await MainPage.Shop();
    await MainPage.Owners();
    await MainPage.AboutUs();
});

Then(/^user checks footer$/, async () => {
    await MainPage.Footer();
});