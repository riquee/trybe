const fetch = require('node-fetch');

const fetchApi = {
  getFetch: async (url) => fetch(url).then((r) => r.json()),
};

const getFetch = async (url) => fetch(url).then((r) => r.json());
jest.mock();
test('Test API', async () => {
  const sucess = {
    message: 'https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg',
    status: 'success',
  };
  const error = {
    status: 'error',
    message: 'No route found for "GET /api/breeds/image/randoms" with code: 0',
    code: 404,
  };

  fetchApi.getFetch = jest.spyOn(fetchApi, 'getFetch').mockImplementation(
    (url) =>
      new Promise((resolve, reject) => {
        if (url === 'https://dog.ceo/api/breeds/image/random') {
          resolve(sucess);
        }
        reject(error);
      }),
  );

  const urlSucess = 'https://dog.ceo/api/breeds/image/random';
  const urlFail = 'https://dog.ceo/api/breeds/image/';
  await expect(fetchApi.getFetch(urlSucess)).resolves.toEqual(sucess);
  await expect(fetchApi.getFetch(urlFail)).rejects.toEqual(error);
});