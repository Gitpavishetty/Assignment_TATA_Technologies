class mainpage {
    get safetyTitle() {
        return $('//section[@id="aboutUsModelIntro-0-0"]');
    }

    get NavBar() {
        return $('#sitenav-topbar');
        
    }

    get OurCars() {
        return $('#section-label-0 > span');
        
    }

    get Shop() {
        return $('#section-label-1 > span');
    }

    get Owners() {
        return $('#section-label-2 > span');
    }

    get AboutUs() {
        return $('#section-label-3 > span');
    }

  
  }
  
  module.exports = new mainpage();