import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'

import getExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'

// import expenses from '../tests/fixtures/expenses'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formatedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
        return (
            <div>
               <h2>Sum of {expenseCount} {expenseWord} is {formatedExpensesTotal}</h2>
            </div>
        )
}

const mapStateToProps = state => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)