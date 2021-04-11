const professionalBoard = require('./data');
const searchEmployee = require('../src/searchEmployee');

describe('Testa a função searchEmployee', () => {
  it('searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Deve retornar Ana', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });
  it('Deve retornar array com especialidades', () => {
    expect(searchEmployee('5569-4', 'specialities')).toEqual(['Frontend', 'Redux', 'React', 'CSS']);
  });
  it('Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada"', () => {
    expect(searchEmployee('11111', 'firstName')).toBe('ID não identificada');
  });
  it('Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível" .', () => {
    expect(searchEmployee('8579-6', 'firstNamess')).toBe('Informação indisponível');
  });
});
