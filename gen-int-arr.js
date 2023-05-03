const crypto = require("crypto");

/**
 * Generate integer array
 * @param {*} bytes - number[] (extract bytes from image)
 * @param {*} min - number (less than max)
 * @param {*} max - number (bigger than min)
 * @param {*} length - number (output array length)
 */
function genIntArr(bytes, min, max, length) {
  const output = [];
  const byteLength = Math.ceil(Math.log2(max - min + 1) / 8);

  let hash = crypto.createHash("sha512").update(new Uint8Array(bytes)).digest();

  let index = 0;

  while (output.length < length) {
    if (index + byteLength > 64) {
      hash = crypto.createHash("sha512").update(hash).digest();
      index = 0;
    }

    const numBytes = hash.subarray(index, index + byteLength);
    let num = 0;

    for (let i = 0; i < numBytes.length; i++) {
      num += numBytes[i] * Math.pow(256, i);
    }

    num = (num % (max - min + 1)) + min;

    output.push(num);
    index += byteLength;
  }

  return output;
}

module.exports = genIntArr;
