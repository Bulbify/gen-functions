const extractBytes = require("../extract-bytes");
const genInt = require("../gen-int");

const imageBytes = extractBytes("./sample-image.png");

const output = genInt(imageBytes, 0, 100);

console.log("Result:", output);
