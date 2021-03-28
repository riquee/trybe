const assert = require("assert");

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

const containsA = () => names.reduce((acc, curr) => acc + curr.match(/a/gi).length, 0)
assert.deepStrictEqual(containsA(), 20);
