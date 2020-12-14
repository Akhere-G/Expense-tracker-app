const initialTransactions = [
  {
    id: 1,
    title: "bread",
    amount: -5,
  },
  {
    id: 2,
    title: "eggs",
    amount: -10,
  },
  {
    id: 3,
    title: "paycheck",
    amount: 5,
  },
  {
    id: 4,
    title: "birythday gift",
    amount: 20,
  },
];

export const sumIncome = transactions => {
  return transactions.reduce((sum, current) => {
    const num = current.amount;
    if (num > 0) {
      return sum + num;
    }
    return sum;
  }, 0);
};

export const sumExpenses = transactions => {
  return transactions.reduce((sum, current) => {
    const num = current.amount;
    if (num < 0) {
      return sum + num;
    }
    return sum;
  }, 0);
};

export const sumBalance = transactions => {
  return transactions.reduce((sum, current) => {
    return sum + current.amount;
  }, 0);
};
