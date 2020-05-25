import authReducer from '../../reducers/auth'

test('should login correctly', () => {
    const action = {
        type: 'LOGIN',
        uid: 'z4356' 
    }
    const state = authReducer({}, action)
    expect(state).toEqual({uid: 'z4356' })
})

test('should handle logout correctly', () => {
    const state = authReducer({}, { type: 'LOGOUT' })
    expect(state).toEqual({})
})