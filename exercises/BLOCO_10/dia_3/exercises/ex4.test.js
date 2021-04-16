const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const response = await fetch(API_URL, { headers: { Accept: 'application/json' } });
  const data = await response.json();
  return data.joke;
};

test('Test Joke', () => {
  const sucess = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const fetchJoke = jest.fn().mockReturnValue(sucess);
  expect(fetchJoke()).toEqual(sucess);
});
