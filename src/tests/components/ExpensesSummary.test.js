import React from 'react'
import { shallow } from 'enzyme'

import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'

test('should render ExpenseSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={9495} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={124435} />)
    expect(wrapper).toMatchSnapshot()
})