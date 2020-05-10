
 const getExpensesTotal = expenses => {
    // if (expenses.length === 0) return 0
    return expenses
        .map(expense => expense.amount)
        .reduce((acc, cur) => acc + cur, 0)
}

export default getExpensesTotal