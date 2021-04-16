const rand = () => Math.ceil(Math.random() * 100);
const random = {
  rand: () => 20,
};

console.log(random.rand());
describe('Rand numbers', () => {
  test('Test1', () => {
    const rand = jest.fn().mockReturnValue(10);
    rand();
    expect(rand).toHaveBeenCalled();
    expect(rand()).toBe(10);
    expect(rand).toHaveBeenCalledTimes(2);
  });

  test('Test2', () => {
    const rand = jest.spyOn(random, 'rand').mockImplementation((a, b) => a / 2);
    rand(2, 2);
    expect(rand).toHaveBeenCalledTimes(1);
    expect(rand).toHaveBeenLastCalledWith(2, 2);
    expect(rand(2, 2)).toBe(1);
    rand.mockClear();
  });

  test('Test3', () => {
    const rand = jest.spyOn(random, 'rand').mockImplementation((a, b, c) => a * b * c);
    rand(10, 10, 10);
    expect(rand).toHaveBeenCalledTimes(1);
    expect(rand).toHaveBeenLastCalledWith(10, 10, 10);
    expect(rand(10, 10, 10)).toBe(1000);

    rand.mockRestore();
    rand.mockImplementation((a) => a * 2);
    rand(5);
    expect(rand).toHaveBeenCalledTimes(1);
    expect(rand).toHaveBeenLastCalledWith(5);
    expect(rand(5)).toBe(10);
  });
});
