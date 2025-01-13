const cookies = require('../web_elements/cookies');
const mainpage = require('../web_elements/mainpage')
const footers = require('../web_elements/footer')

class MainPage {
  async isBannerDisplayed() {
      return await cookies.cookieBanner.isDisplayed();
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

  async Footer() {
    return await footers.Footer.isDisplayed();
}


async CookiesButton() {
    // await footers.cookiesButton.waitForExist({ timeout: 10000 });
    // await footers.cookiesButton.waitForDisplayed();
    return await footers.cookiesButton.isDisplayed();
}
 
}

module.exports = new MainPage();