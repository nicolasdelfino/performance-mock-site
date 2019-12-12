var facebook = document.createElement("script");
facebook.setAttribute("src", "http://localhost:4001/3rdparty/facebook");
// facebook.setAttribute('async', '');
document.getElementsByTagName("head")[0].appendChild(facebook);

var fbevents = document.createElement("script");
fbevents.setAttribute("src", "http://localhost:4001/3rdparty/fbevents");
// fbevents.setAttribute('async', '');
document.getElementsByTagName("head")[0].appendChild(fbevents);
