const uppercase = (str, callback) => callback(str.toUpperCase());

describe('Testando callback', () => {
  it('callback', (done) => {
    uppercase('test', (string) => {
        expect(string).toBe('TEST');
      done();
    });
  });
});