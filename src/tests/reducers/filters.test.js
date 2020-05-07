import moment from 'moment'

import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT '})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const state = filtersReducer({ sortBy: 'amount'}, { type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: undefined
    }
    const state = filtersReducer(currentState, { type: 'SET_TEXT_FILTER', text: 'some text'})
    
    expect(state.text).toBe('some text')
})

test('should set start date filter', () => {
    const currentStartDate = moment(0).add(10, 'years')
    const currentState = {
        text: '',
        startDate: currentStartDate,
        endDate: undefined,
        sortBy: undefined
    }
    const state = filtersReducer(currentState, { type: 'SET_START_DATE', startDate: currentStartDate})
    
    expect(state.startDate).toEqual(currentStartDate)
})

test('should set end date filter', () => {
    const currentEndDate = moment(0).subtract(100, 'years')
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: currentEndDate,
        sortBy: undefined
    }
    const state = filtersReducer(currentState, { type: 'SET_END_DATE', endDate: currentEndDate})
    
    expect(state.endDate).toEqual(currentEndDate)
})