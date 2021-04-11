const hydrate = (arg) => {
  const reducer = (acc, curr) => acc + curr;
  const string = arg.match(/\d+/g).map(Number).reduce(reducer);
  return `${string} copo${string > 1 ? 's' : ''} de água`;
};

module.exports = hydrate;
