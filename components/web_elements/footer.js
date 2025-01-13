class footers {

    get Footer() {
        return $('//*[@id="site-footer-embed"]');
    }

    get cookiesButton() {
        browser.execute(() => { const hiddenElement = querySelector('#vcc-site-footer-shadow-container > footer > div > div.text-secondary.micro.container-lg.stack-8 > ul > li:nth-child(1) > a');
        hiddenElement.style.display = 'block'; 
        })
    }
  
    get legalButton() {
        return $('#vcc-site-footer-shadow-container > footer > div > div.text-secondary.micro.container-lg.stack-8 > ul > li:nth-child(2) > a');
    }
  
    get privacyButton() {
        return $('#vcc-site-footer-shadow-container > footer > div > div.text-secondary.micro.container-lg.stack-8 > ul > li:nth-child(3) > a');
    }
  
    get socialMediaButton() {
        return $('#vcc-site-footer-shadow-container > footer > div > div.text-secondary.micro.container-lg.stack-8 > ul > li:nth-child(4) > a');
    }
  
    get tellUsButton() {
        return $('#vcc-site-footer-shadow-container > footer > div > div.text-secondary.micro.container-lg.stack-8 > ul > li:nth-child(5) > a');
    }
  
    get copyrightBanner() {
        return $('#vcc-site-footer-shadow-container > footer > div > div.text-secondary.micro.container-lg.stack-8 > div');
    }
  }
  
  module.exports = new footers();
  