const assert = require('assert');

const getChange = (payable, paid) => {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  let remaining = paid - payable;
  // escreva seu código aqui...
  coins.forEach((index) => {
    if (remaining >= index) {
      const qtd = Math.floor(remaining / index);
      for (let count = 1; count <= qtd; count += 1) {
        remaining -= index;
        change.push(index);
      }
    }
  });
  return change;
};

const payable = 215;
const paid = 300;
const expected = [50, 20, 10, 5];
// console.log(typeof getChange(payable, paid))
assert.deepStrictEqual(getChange(payable, paid), expected);
