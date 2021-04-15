const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = async (id) => {
  try {
    return users[id];
  } catch (error) {
    throw new Error('User with ' + id + ' not found.');
  }
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

test('Test Promise', () => {
  return getUserName(4).then(async (r) => {
    await expect(r).toBe('Mark');
    await expect(r).not.toBe('Paul');
  });
});
