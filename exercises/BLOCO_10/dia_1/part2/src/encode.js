const encode = (string) => {
  const list = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  for (const key of string) {
    if (list[key]) string = string.replace(key, list[key]);
  }
  return string;
};

function decode(string) {
  const list = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  for (const key of string) {
    if (list[key]) string = string.replace(key, list[key]);
  }
  return string;
}