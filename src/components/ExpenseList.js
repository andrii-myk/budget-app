import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import selectExpenses from './../selectors/expenses'

export const ExpenseList = props => (
    <div>{
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                renderList(props.expenses)
            )
         }  
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

const renderList = expenses => (
    expenses.map(expense => {
        return (
            <ExpenseListItem key={expense.id} {...expense}/>
        )
    })
)
export default connect(mapStateToProps)(ExpenseList)
