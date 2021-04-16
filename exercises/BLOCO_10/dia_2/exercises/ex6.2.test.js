const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByName = (ageArg) =>
    new Promise((resolve, rejected) => {
      const search = Animals.filter(({ age }) => age === ageArg);
      return search.length ? resolve(search) : rejected('Nenhum animal com essa idade!');
    });
  
  const getAnimal = async (age) => findAnimalByName(age);

  describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimal(1).then((animal) => {
          expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
        });
      });
    });
  
    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimal(3).catch((error) =>
          expect(error).toEqual('Nenhum animal com essa idade!'),
        );
      });
    });
  });