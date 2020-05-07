import { createStore, combineReducers } from 'redux'


//Get visible expenses




store.subscribe(() => {
    const state =store.getState()
    const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(VisibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: -21000}))
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: -1000}))
// const removed = store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
// store.dispatch(setTextFilter('rent'))
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(225))

const demoState = {
    expenses: [{
        id: 'dkdkdkddkmekd',
        description: 'January rent',
        note: 'This was the final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}