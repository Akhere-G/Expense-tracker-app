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

export const filterFunc = (searchOption, item) => {
  switch (searchOption) {
    case "all":
      return true;
    case "income":
      return item > 0;
    case "expenses":
      return item < 0;
    default:
      return true;
  }
};
