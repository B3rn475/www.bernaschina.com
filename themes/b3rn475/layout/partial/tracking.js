(function () {
  var doNotTrack = false;
  if (window.doNotTrack !== undefined) {
    doNotTrack = doNotTrack || (window.doNotTrack == "1" || window.doNotTrack == "yes");
  } else if (navigator.doNotTrack !== undefined) {
    doNotTrack = doNotTrack || (navigator.doNotTrack == "1" || navigator.doNotTrack == "yes");
  } else if (navigator.msDoNotTrack !== undefined) {
    doNotTrack = doNotTrack || (navigator.msDoNotTrack == "1" || navigator.msDoNotTrack == "yes");
  } else if ('msTrackingProtectionEnabled' in window.external) {
    doNotTrack = doNotTrack || window.external.msTrackingProtectionEnabled();
  } else {
    // Not supported
    doNotTrack = true;
  }
  if (doNotTrack) {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-37220006-1');
  var script = document.createElement("script");
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-37220006-1';
  document.head.append(script);
}());
