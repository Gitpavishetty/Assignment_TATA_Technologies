const cookies = require('../web_elements/cookies');
const mainpage = require('../web_elements/mainpage');
const footers = require('../web_elements/footer')
class MainPage {
    async isBannerDisplayed() {
        await cookies.cookieBanner.isDisplayed();
    }

    async acceptAllCookies() {
        await cookies.acceptButton.click();
    }

    async NavigationBar() {
        return await mainpage.NavBar.isDisplayed();
    }

    async OurCars() {
        await mainpage.OurCars.isDisplayed();
        await mainpage.OurCars.isClickable();
    }

    async Shop() {
        await mainpage.Shop.isDisplayed();
        await mainpage.Shop.isClickable();
    }

    async Owners() {
        await mainpage.Owners.isDisplayed();
        await mainpage.Owners.isClickable();
    }

    async AboutUs() {
        await mainpage.AboutUs.isDisplayed();
        await mainpage.AboutUs.isClickable();
    }

    async SafetyTitledisplay() {
        return await mainpage.safetyTitle.isDisplayed();
    }

    async Overview() {
        await mainpage.Overview.isDisplayed();
        await mainpage.Overview.isClickable();
       
    }

    async CultureAndVision() {
        await mainpage.CultureAndVision.isDisplayed();
        await mainpage.CultureAndVision.isClickable();
    }

    async Features() {
        await mainpage.Features.isDisplayed();
        await mainpage.Features.isClickable();
    }

    async ChildSafety() {
        await mainpage.Childsafety.isDisplayed();
        await mainpage.Childsafety.isClickable();
    }

    async Research() {
        await mainpage.Research.isDisplayed();
        await mainpage.Research.isClickable();
    }

    async Heritage() {
        await mainpage.Heritage.isDisplayed();
        await mainpage.Heritage.isClickable();
    }

    async Footer() {
        return await footers.Footer.isDisplayed();
    }

    async CookiesButton() {
        return await footers.cookiesButton.isDisplayed();
    }
}

module.exports = new MainPage();