// If an article from TheRegister is more than 2 pages long, switch to Print layout.
// Adapted from Dean Wilson's script:  http://userscripts-mirror.org/scripts/review/4350
//
// Append an 'ff' to the end of the URL to jump to the forum for that article, e.g.:
// http://www.theregister.co.uk/Print/2015/11/06/blackberry_priv_review/ff
//
// Append a ?no to the end of a non-print-view URL to keep it that way:
// http://www.theregister.co.uk/2015/11/06/blackberry_priv_review/?no

// ==UserScript==
// @name          TheRegister Printer Friendly Articles
// @namespace     http://hoodslide.net/gmscripts/
// @description   Redirect to the print friendly version of the current TheRegister article
// @include       http://theregister.co.uk/*
// @include       http://www.theregister.co.uk/*
// @include       http://channelregister.co.uk/*
// @include       http://www.channelregister.co.uk/*
// @include       http://regdeveloper.co.uk/*
// @include       http://www.regdeveloper.co.uk/*
// @include       http://reghardware.co.uk/*
// @include       http://www.reghardware.co.uk/*
// ==/UserScript==

(function() {
if (!(window.location.href.match(/\.co\.uk\/$/))) {
    // http://www.theregister.co.uk/2015/11/06/blackberry_priv_review/?page=3
    // var pagename = window.location.href.match(/\/[^/]+\/$/);   // '/blackberry_priv_review/'
    
  if (!(window.location.href.match(/co\.uk\/Print\//)) &&       // Already in a
      !(window.location.href.match(/print.html/)) &&            //   print view? Ignore.
      !(window.location.href.match(/\?no/)) &&                  // Disable print view?
      (window.location.href.match(/\/\d\d\d\d\//)) &&           // Has a date in the URL, e.g. /2015/?
      $('div#article div#page_select div#page-nav a[href="?page=3"]').size() > 0   // Has at least 3 pages?
  ) {
    window.location.replace(window.location.href.replace("co.uk/", "co.uk/Print/"));
  } else if (window.location.href.match(/ff$/)) {
    // Go to the forum page if ff is appended to the URL
    window.location.replace(
        window.location.href.replace("http://www.", "http://forums.")
        .replace("/Print/", "/forum/1/")
        .replace(/\/ff$/, "/"));
  }    
}

})();
