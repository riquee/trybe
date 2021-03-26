const assert = require("assert");

const removeVowels = (word) => {
  const reg = /a|e|i|o/gi;
  let count = 0;
  return word.replace(reg, (index) => {
    return (count += 1), (index = count);
  });
};

const parameter = "Dayane";
const result = "D1y2n3";

assert.strictEqual(typeof removeVowels, "function");
assert.deepStrictEqual(removeVowels(parameter), result);