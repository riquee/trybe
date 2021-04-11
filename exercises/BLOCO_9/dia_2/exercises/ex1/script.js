// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const text = document.querySelector('#jokeContainer');
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const joke = await fetch(API_URL, myObject).then((resp) => resp.json());
  text.innerHTML = joke.joke
};

window.onload = () => fetchJoke();