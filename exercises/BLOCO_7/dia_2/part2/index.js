const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};
// EX 1
const addLessons = (obj, key, value) => (obj = { ...obj, [key]: value });

// EX 2
const objKeys = (obj) => console.log(Object.keys(obj));

// EX 3
const objLength = (obj) => console.log(Object.keys(obj).length);

// EX 4
const objValues = (obj) => console.log(Object.values(obj));

// EX 5
const allLessons = { lesson1, lesson2, lesson3 };

//EX 6

const totalStudantes = (obj) => {
  let total = 0;
  Object.keys(obj).forEach((index) => {
    total = total + obj[`${index}`].numeroEstudantes;
  });
  return total;
};

//EX 7

const valuePosition = (obj, position) =>
  console.log(Object.values(obj)[position]);

//EX 8

const checkObj = (obj, key, value) =>
  Object.entries(obj).some(([key2, value2]) => key2 == key && value2 == value);
lesson3, "materia", "Maria Clara";

// BONUS 1

const totalMatematica = (obj) => {
  let total = 0;
  Object.values(obj).forEach((i) => {
    if (i.materia == "Matemática") {
      total += i.numeroEstudantes;
    }
  });
  return total;
};

// BONUS 2

let newObj = { professor: "Maria Clara", aulas: "", estudantes: 0 };

Object.values(allLessons)
  .filter((index) => index.professor == "Maria Clara")
  .forEach((index) => {
    newObj.aulas += ` ${index.materia}`;
    newObj.estudantes += index.numeroEstudantes;
  });

console.log(newObj);
