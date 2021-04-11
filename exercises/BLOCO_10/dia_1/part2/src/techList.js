const techList = (arr, nome) =>
  arr.length === 0 ? 'Vazio!' : arr.sort().map((e) => ({ tech: e, name: nome }));

module.exports = techList;
