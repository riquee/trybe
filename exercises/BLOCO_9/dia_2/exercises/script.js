const myObject = {
  method: "GET",
  headers: { Accept: "application/json" },
};

const fetchJoke = async (url, obj) => {
  return fetch(url, obj)
    .then((response) => response.json())
    .then((data) => data.joke);
  throw new Error("endpoint não existe");
};

const addJoke = async (elem, joke) => {
  const API_URL = "https://icanhazdadjoke.com/";
  const text = document.querySelector("#text");
  return await joke(API_URL, myObject)
    .then((joke) => {
      return (elem.innerText = joke);
    })
    .catch((err) => console.log(err));
};

addJoke(text, fetchJoke);
