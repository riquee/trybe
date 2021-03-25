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

const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';
const checkResp = (fn1) => (fn2) => fn1 === fn2.toLowerCase();
console.log(checkResp(correctAnswer)(userAnswer));

// EX 4

// Game Actions

