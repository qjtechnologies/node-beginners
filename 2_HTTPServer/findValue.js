const fs = require("fs");

const apiData = fs.readFileSync("./apiData.json", "utf-8");
const apiObj = JSON.parse(apiData);
// console.log(apiObj.length);
// console.log(apiObj[1]);

const responseData = apiObj.find((el) => el.id == 5);
console.log(responseData);

// Map;
// filter;
// find;
// reduce;
// forEach;
