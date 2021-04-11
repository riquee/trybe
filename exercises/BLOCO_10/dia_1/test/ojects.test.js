const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Compare dois objetos (JSON)', () => {
  it('Comparar obj1 e obj2', () => {
    expect(obj1).toMatchObject(obj2);
  });
  it('Comparar obj1 e obj2, diferentes de obj3', () => {
    expect(obj1 || obj2).not.toMatchObject(obj3);
  });
});
