const path = require("path");
const extractBytes = require("../extract-bytes");
const genInt = require("../gen-int");
const formatter = require("../formatter");

const type = "int";

const image = path.resolve("./sample-image.png");

const imageBytes = extractBytes(image);

const input = {
  min: 0,
  max: 100,
};

const output = genInt(imageBytes, input.min, input.max);

console.log("\n");
console.log("Generator type:", type);
console.log("Image:", image);
console.log("Input:", input);
console.log("Output:", output);
console.log("Formatted output:", formatter(type, input?.order, output));
console.log("\n");
