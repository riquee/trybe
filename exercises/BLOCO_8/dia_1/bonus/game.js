const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 1,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const updateDragon = () => {
  const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };

  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };

  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };

  const battleMembers = { mage, warrior, dragon };
};

const dragonAttack = (dragon) =>
  Math.floor(Math.random() * (dragon.strength - 15) + 15);

const warriorAttack = (warrior) => {
  const dmgMin = warrior.strength;
  const dmgMax = warrior.strength * warrior.weaponDmg;
  return Math.floor(Math.random() * (dmgMax - dmgMin) + dmgMin);
};

const mageAttack = (mage, check) => {
  const dmgMin = mage.intelligence;
  const dmgMax = mage.intelligence * 2;
  const attack = {
    damage: Math.floor(Math.random() * (dmgMax - dmgMin) + dmgMin),
    mana: 0
  };
  if (mage.mana > 15) {
    attack.mana = 15;
    return attack;
  } else {
    attack.damage = 'Não possui mana suficiente';
    return attack
  }
};

const gameActions = {
    turnWarrior: (hof)=> {
        const atk = hof
        return dragon.healthPoints -= atk, warrior.damage = atk;
    },

    turnMage: (hof)=> {
        const atk = hof
        return dragon.healthPoints -= atk, mage.damage = atk;
    },

    turnDragon: (hof)=> {
        const atk = hof
        return warrior.healthPoints -= atk, mage.healthPoints -= atk, dragon.damage = atk;
    }

  };