const randNumbers = () => Math.pow(Math.ceil(Math.random() * 50), 2);
const arrayGenerator = (qtd, fn) =>
  Array(10)
    .fill()
    .map((e) => (e = fn()));

const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

const check8000 = async (resolve, reject)  => {
  const array = arrayGenerator(10, randNumbers);
  const totalNumbers = await sumArray(array);
  if (totalNumbers < 8000) return totalNumbers;
  throw new Error('Promise rejeitada');
};

const divisores = (number) => {
  const div2 = number / 2;
  const div3 = number / 3;
  const div5 = number / 5;
  const div10 = number / 10;
  return [div2, div3, div5, div10];
};
check8000
  .then((divisores)
  .then(sumArray)
  .then(console.log)
  .catch((err) => console.log("Mais de oito mil"));
