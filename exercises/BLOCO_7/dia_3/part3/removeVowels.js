const assert = require("assert");

const removeVowels = (word) => {
  let count = 0;
  return word.replace(/a|e|i|o/gi, (index) => (count += 1), (index = count));
};

const parameter = "Dayane";
const result = "D1y2n3";

assert.strictEqual(typeof removeVowels, "function");
assert.deepStrictEqual(removeVowels(parameter), result);
