class cookies {
    get cookieBanner() {
      return $("//div[@id='onetrust-banner-sdk']");
    }
  
    get acceptButton() {
      return $("//button[@id='onetrust-accept-btn-handler']");
    }
  
    get settingsButton() {
      return $("//button[@id='onetrust-pc-btn-handler']");
    }
  
    get rejectAllButton() {
      return $("//button[@id='onetrust-reject-all-handler']");
    }
  
  }
  
  module.exports = new cookies();