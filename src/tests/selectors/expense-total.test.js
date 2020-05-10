import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expense', () => {
    expect(getExpensesTotal([])).toBe(0)
})

test('should correctly add up a single expense', () => {
    expect(getExpensesTotal([expenses[0]])).toBe(195)
})

test('should correctly add up multiple expenses', () => {
    expect(getExpensesTotal(expenses)).toBe(114195)
})