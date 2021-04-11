const encode = (string) => {
  const list = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  for (const key of string) {
    if (list[key]) string = string.replace(key, list[key]);
  }
  return string;
};

const decode = (string) => {
  const list = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  for (const key of string) {
    if (list[key]) string = string.replace(key, list[key]);
  }
  return string;
};

describe('Encode & Decode', () => {
  it('Teste se encode e decode são funções', () => {
    const expect1 = typeof encode;
    const expect2 = typeof decode;
    expect(expect1 || expect2).toBe('function');
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    const string = 'aeiou';
    expect(encode(string)).toBe('12345');
  });
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    const string = '12345';
    expect(decode(string)).toBe('aeiou');
  });
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    const string = 'qwrt';
    expect(encode(string)).toBe('qwrt');
  });
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    const string = 'qwrt';
    const length = string.length;
    encode(string)
    expect(string.length).toBe(length);
  });
});
