const commonFunction = require("@walnut/date");
const cowsay = require("cowsay");


commonFunction();
console.log("Hello from server!!!");

console.log(cowsay.say({
  text : "I'm a moooodule",
  e : "oO",
  T : "U "
}));
