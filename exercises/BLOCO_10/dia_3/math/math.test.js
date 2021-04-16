const math = require('../math/math');

test('Teste soma mocked', () => {
  const somar = jest.spyOn(math, 'somar').mockImplementation((a, b) => a + b);
  somar(1, 2);
  expect(somar).toHaveBeenCalledTimes(1);
  expect(somar).toHaveBeenLastCalledWith(1, 2);
  expect(somar(1, 2)).toBe(3);
  expect(somar).toHaveBeenCalledTimes(2);
});

test('Teste divisao mocked', () => {
  math.somar = jest.fn().mockReturnValueOnce(15).mockReturnValueOnce(2).mockReturnValueOnce(5);

  expect(math.somar).toHaveBeenCalledTimes(0);

  expect(math.somar()).toBe(15);
  expect(math.somar).toHaveBeenCalledTimes(1);

  expect(math.somar()).toBe(2);
  expect(math.somar).toHaveBeenCalledTimes(2);

  expect(math.somar()).toBe(5);
  expect(math.somar).toHaveBeenCalledTimes(3);
});

test('Teste subtrair mocked', () => {
  expect(math.subtrair(2, 1)).toBe(1);
  const mockSubtrair = jest.spyOn(math, 'subtrair').mockReturnValue(20);

  expect(mockSubtrair).toHaveBeenCalledTimes(0);
  math.subtrair();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair()).toBe(20);
  expect(mockSubtrair).toHaveBeenCalledTimes(2);
  mockSubtrair.mockRestore();
  expect(mockSubtrair).toHaveBeenCalledTimes(0);
  expect(math.subtrair(2, 1)).toBe(1);
  expect(mockSubtrair).toHaveBeenCalledTimes(0);
});
