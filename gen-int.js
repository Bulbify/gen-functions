const crypto = require("crypto");

/**
 * Generate integer
 * @param {*} bytes - number[] (extract bytes from image)
 * @param {*} min - number (less than max)
 * @param {*} max - number (bigger than min)
 */
function genInt(bytes, min, max) {
  const hash = crypto
    .createHash("sha512")
    .update(new Uint8Array(bytes))
    .digest();

  const num = BigInt(`0x${Buffer.from(hash).toString("hex")}`);
  const range = BigInt(max - min + 1);

  const output = Number((num % range) + BigInt(min));

  return output;
}

module.exports = genInt;
