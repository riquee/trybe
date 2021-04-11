const professionalBoard = require('../test/data');

const searchEmployee = (idEmp, detail) => {
  const emp = professionalBoard.find(({ id }) => id === idEmp);
  return !emp ? 'ID não identificada' : !emp[detail] ? 'Informação indisponível' : emp[detail];
};

module.exports = searchEmployee;
