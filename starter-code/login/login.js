console.log("login.js loaded");
var userLogin = { name: "Jimmy", password: "turtles" }

var passwordInput;

var loggedIn = false


while (!loggedIn) {
  passwordInput = prompt("Please input login information for " + userLogin.name + ".")
  if ( passwordInput === userLogin.password) {
    console.log("Welcome");
    loggedIn = true;
  } else {
    console.log("Denied");
    break;
  }
}
