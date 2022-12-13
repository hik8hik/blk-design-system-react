const debts = {
  Men: 82000,
  L: 27000,
  Babu: 8000,
  HMutua: 1000,
  Yahya: 1500,
  Gas: 3000,
  Guyo: 3500,
  Nas: 16000,
  Moha: 500,
  Kiti: 35000,
};

const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);

console.log(sumValues(debts));
