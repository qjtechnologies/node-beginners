const fs = require("fs");

// const data = fs.readFileSync("./textfile.txt", "utf-8");

function handleFile(err, data) {
  if (err) {
    console.log("Error Reading File");
  }
  console.log(data);
}

console.log("This is before readFile");
fs.readFile("./textfile.txt", "utf-8", handleFile);

// fs.readFile("./textfile1111.txt", "utf-8", (err, data) => {
//   console.log(data);
//   console.log("This is after readFile");
// });
console.log("This is after readFile");
