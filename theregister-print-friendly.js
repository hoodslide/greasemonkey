// If an article from TheRegister is more than 2 pages long, switch to Print layout.
// From there, append an 'ff' to the end of the URL to jump to the forum for that article.
// Adapted from Dean Wilson's script:  http://userscripts-mirror.org/scripts/review/4350
// Steve Hunter

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
    
  if (!(window.location.href.match(/co\.uk\/Print\//)) &&
      !(window.location.href.match(/print.html/)) && 
      !(window.location.href.match(/\?no/)) && 
      (window.location.href.match(/\/\d\d\d\d\//)) &&
      $('div#article div#page_select div#page-nav a[href="?page=3"]').size() > 0   // Has at least 3 pages?
  ) {
    window.location.replace(window.location.href.replace("co.uk/", "co.uk/Print/"));
  } else if (window.location.href.match(/ff$/)) {
      // Go to the forum page by appending ff to the URL:
      // http://www.theregister.co.uk/Print/2015/11/06/blackberry_priv_review/ff ->
      // http://forums.theregister.co.uk/forum/1/2015/11/06/blackberry_priv_review/    
      
    window.location.replace(
        window.location.href.replace("http://www.", "http://forums.")
        .replace("/Print/", "/forum/1/")
        .replace(/\/ff$/, "/"));
  }    
}

})();
