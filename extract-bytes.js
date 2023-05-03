const fs = require("fs");

function extractBytes(path) {
  const image = fs.readFileSync(path);

  const imageJSON = image.toJSON();

  return imageJSON.data;
}

module.exports = extractBytes;
