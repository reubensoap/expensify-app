const getExpenseTotals = (expenses) => {
    const amountArray = expenses.map(expense => expense.amount);
    return amountArray.reduce((result, item) => result + item, 0);
};

export default getExpenseTotals;