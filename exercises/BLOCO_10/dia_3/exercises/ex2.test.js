const strings = {
  uper: (string) => string.toUpperCase(),
  position: (string) => string[0],
  concat: (a, b) => a + b,
};

describe('Test Strings', () => {
  it('Retornar string em caixa baixa', () => {
    strings.uper = jest.spyOn(strings, 'uper').mockImplementation((string) => string.toLowerCase());

    strings.uper('TEST');
    expect(strings.uper).toHaveBeenCalledTimes(1);
    expect(strings.uper).toHaveBeenLastCalledWith('TEST');
    expect(strings.uper('TEST')).toBe('test');
    strings.uper.mockRestore();
    expect(strings.uper('test')).toBe('TEST');
  });

  it('Retornar útima letra', () => {
    strings.position = jest
      .spyOn(strings, 'position')
      .mockImplementation((string) => string[string.length - 1]);

    strings.position('tests');
    expect(strings.position).toHaveBeenCalledTimes(1);
    expect(strings.position).toHaveBeenLastCalledWith('tests');
    expect(strings.position('tests')).toBe('s');
    strings.position.mockRestore();
    expect(strings.position('tests')).toBe('t');
  });

  it('Retornar string concatenada', () => {
      strings.concat = jest.spyOn(strings, 'concat').mockImplementation(((a, b, c) => a + b + c));

      strings.concat('a', 'b', 'c');
      expect(strings.concat).toHaveBeenCalledTimes(1);
      expect(strings.concat).toHaveBeenLastCalledWith('a', 'b', 'c');
      expect(strings.concat('a', 'b', 'c')).toBe('abc');
      strings.concat.mockRestore();
      expect(strings.concat('a', 'b')).toBe('ab');
  })
});
