const extractBytes = require("../extract-bytes");
const genIntArr = require("../gen-int-arr");

const imageBytes = extractBytes("./sample-image.png");

const output = genIntArr(imageBytes, 0, 100, 10);

console.log("Result:", output);
