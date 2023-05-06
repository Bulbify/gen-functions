const path = require("path");
const extractBytes = require("../extract-bytes");
const genIntArr = require("../gen-int-arr");
const formatter = require("../formatter");

const type = "int_arr";

const image = path.resolve("./sample-image.png");

const imageBytes = extractBytes(image);

const input = {
  min: 0,
  max: 100,
  length: 10,
  order: "asc",
};

const output = genIntArr(imageBytes, input.min, input.max, input.length);

console.log("\n");
console.log("Generator type:", type);
console.log("Image:", image);
console.log("Input:", input);
console.log("Output:", output);
console.log("Formatted output:", formatter(type, input?.order, output));
console.log("\n");
