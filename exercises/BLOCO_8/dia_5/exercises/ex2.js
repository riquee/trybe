const assert = require('assert');

const sum = (a = 0, ...rest) => {
    const arr = [a, ...rest]
    return arr.reduce((acc, curr) => acc + curr);
}

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);