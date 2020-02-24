if(navigator.cookieEnabled === false){
    alert("Error cookies no enabled")
}
var COOKIE_NAME = "Example Cookie";
var COOKIE_VALUE = "Hello, world!";
var COOKIE_PATH = "/foo/bar";
var COOKIE_EXPIRES;

COOKIE_EXPIRES = (new Date(Date.now() + 60000)).toUTCString()
document.cookie +=
    COOKIE_NAME + "=" + COOKIE_VALUE
    + "; expires=" + COOKIE_EXPIRES
    + "; path=" + COOKIE_PATH;
