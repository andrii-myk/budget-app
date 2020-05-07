import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()

store.dispatch(addExpense({ description: 'Gas bill', amount: 100, createdAt: 21000}))
store.dispatch(addExpense({ description: 'Water bill', amount: 300, createdAt: -1000}))
store.dispatch(addExpense({ description: 'Rent', amount: 100500, createdAt: 25000}))
// store.dispatch(setTextFilter('gas'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000)
const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

// console.log(store.getState());


ReactDOM.render(jsx, document.getElementById('app'))
