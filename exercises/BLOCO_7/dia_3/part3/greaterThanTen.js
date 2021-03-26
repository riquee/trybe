const assert = require("assert");

const greaterThanTen = (array) => array.filter((index) => index > 10);

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.strictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(greaterThanTen(parameter), result);