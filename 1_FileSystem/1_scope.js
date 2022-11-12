// console.log("This is my First JS code");

const fs = require("fs");

// const
// let
// var

function add(x) {
  if (x > 50) {
    var y = 20;
    console.log("Internal", y);
  }
  y = 30;
  console.log("External", y);
}
add(100);
console.log("Func External", y);

// var x = 100;
// console.log("x", x);
// x = 10;
// console.log("x", x);
