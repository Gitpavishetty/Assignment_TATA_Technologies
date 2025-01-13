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

    get linkbar() {
        return $('body > nav > div.aq.ar.as.at.au.av.aw.ax.ay.az.b.en.eo.ep.eq');
    }

    get Overview() {
        return $('body > nav > div.aq.ar.as.at.au.av.aw.ax.ay.az.b.en.eo.ep.eq > ul > li:nth-child(1) > a > em');
    }

    get CultureAndVision() {
        return $('body > nav > div.aq.ar.as.at.au.av.aw.ax.ay.az.b.en.eo.ep.eq > ul > li:nth-child(2) > a > em');
    }

    get Features() {
        return $('body > nav > div.aq.ar.as.at.au.av.aw.ax.ay.az.b.en.eo.ep.eq > ul > li:nth-child(2) > a > em');
    }

    get Childsafety() {
        return $('body > nav > div.aq.ar.as.at.au.av.aw.ax.ay.az.b.en.eo.ep.eq > ul > li:nth-child(2) > a > em');
    }

    get Research() {
        return $('body > nav > div.aq.ar.as.at.au.av.aw.ax.ay.az.b.en.eo.ep.eq > ul > li:nth-child(5) > a > em');
    }

    get Heritage() {
        return $('body > nav > div.aq.ar.as.at.au.av.aw.ax.ay.az.b.en.eo.ep.eq > ul > li:nth-child(5) > a > em');
    }

  
  }
  
  module.exports = new mainpage();