// EX 1
const emailInsert = (fullName) =>
  fullName.replace(/(\s)/g, "-").concat("@trybe.com.br").toLocaleLowerCase();

const newEmployees = (fullName) => {
  const employees = {
    id1: emailInsert(fullName),
  };
  return employees;
};

// EX 2

const rand = () => Math.ceil(Math.random() * 5);
const checkRand = (number) =>
  number == rand() ? "Parabéns você ganhou" : "Tente novamente";
const prizeDraw = (number, fn) => console.log(fn(number));

// EX 3

const correctAnswer = "higher order function";
const userAnswer = "HIGHER ORDER FUNCTION";
const checkResp = (fn1) => (fn2) => fn1 === fn2.toLowerCase();

// EX 4

const rightAnswers = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const studentAnswers = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const repeat = (array1, array2, fn) => {
  let count = 0;
  for (let index = 0; index < array1.length; index += 1) {
    count += numero = fn(array1[index], array2[index]);
  }
  return `TOTAL DE PONTOS: ${count}`;
};

repeat(rightAnswers, studentAnswers, (elem1, elem2) => {
  if (elem1 == elem2) return 1;
  if (elem2 == "N.A") return 0;
  return -0.5;
});
