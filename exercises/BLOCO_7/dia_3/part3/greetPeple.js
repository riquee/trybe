const assert = require('assert');

const greetPeople = (people) => people.map((index) => `Hello ${index}`)

  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  assert.strictEqual(typeof greetPeople, 'function');
  assert.deepStrictEqual(greetPeople(parameter), result);