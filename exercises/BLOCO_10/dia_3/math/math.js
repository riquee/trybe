const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const somar = async (a, b) => {
  await sleep(10000);
  return a + b;
}; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

// test('mockando subi', () => {
//   const subtrair = jest.fn();

//   subtrair();
//   expect(subtrair).toHaveBeenCalled();
// });

// test('mockando multi', () => {
//   const multiplicar = jest.fn().mockReturnValue(10);

//   multiplicar();
//   expect(multiplicar).toHaveBeenCalled();
//   expect(multiplicar()).toBe(10);
// });

module.exports = { somar, subtrair, multiplicar, dividir };
