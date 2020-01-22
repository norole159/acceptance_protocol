/*
const { session } = require("electron");
//ElectronCookies.enable({ origin: "https://example.com" });

// Durchsuche all Cookies.
session.defaultSession.cookies
  .get({})
  .then(cookies => {
    console.log(cookies);
  })
  .catch(error => {
    console.log(error);
  });

// Query all cookies associated with a specific url.
session.defaultSession.cookies
  .get({ url: "http://www.index.html" })
  .then(cookies => {
    console.log(cookies);
  })
  .catch(error => {
    console.log(error);
  });

// Set a cookie with the given cookie data;
// may overwrite equivalent cookies if they exist.
const cookie = {
  url: "http://www.index.html",
  name: "dummy_name",
  value: "dummy"
};

session.defaultSession.cookies.set(cookie).then(
  () => {
    console.log(cookies);
  },
  error => {
    console.error(error);
  }
);
*/
/*
var los = document.getElementById("los");
los.addEventListener("click", true, alert("funktioniert!"));
*/

var buttomTest = document.getElementById("los");
buttomTest.addEventListener("mouseover", function() {
  alert("MOUSEOVER");
});

function init() {
  var tab = document.getElementById("tabpanel");
  tab.addEventListener("click", clickHandler);
}

function clickHandler(elem) {
  var target = elem.target;

  var selectedTab = document.querySelector('[aria-selected="true"]');
  selectedTab.setAttribute("aria-selected", false);
  target.setAttribute("aria-selected", true);

  var panels = document.querySelector('[aria-hidden="false"]');
  panels.setAttribute("aria-hidden", true);

  var panelId = target.getAttribute("aria-controls"),
    panel = document.getElementById(panelId);
  panel.setAttribute("aria-hidden", false);
}
