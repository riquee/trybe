const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

test('Testando request', async () => {
  const url = 'https://api.github.com/orgs/tryber/repos';
  const resp = await getRepos(url);
  expect(resp).toContain('sd-01-week4-5-project-todo-list');
  expect(resp).toContain('sd-01-week4-5-project-meme-generator');
});
