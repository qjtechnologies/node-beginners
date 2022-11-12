const fs = require("fs");

const data = fs.readFileSync("./textfile.txt", "utf-8");
console.log(`The contents of the file is ${data}`);

const wdata = "This is some content which I need to write in a file.";
fs.writeFileSync("./outFile.txt", wdata, "utf-8");
