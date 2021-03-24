const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
// EX 1
const addLessons = (obj, key, value) => obj = {...obj, [key]: value};

// EX 2
const objKeys = (obj) => console.log(Object.keys(obj));

// EX 3
const objLength = (obj) => console.log(Object.keys(obj).length);

// EX 4
const objValues = (obj) => console.log(Object.values(obj));

// EX 5
const allLessons = {lesson1, lesson2, lesson3}

//