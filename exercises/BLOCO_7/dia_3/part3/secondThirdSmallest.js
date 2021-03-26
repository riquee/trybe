const assert = require('assert');

function secondThirdSmallest(array) {
    const order = array.sort((a, b) => a - b)
    return [order[1], order[2]]
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.strictEqual(typeof secondThirdSmallest, 'function');
assert.deepStrictEqual(secondThirdSmallest(parameter), result)