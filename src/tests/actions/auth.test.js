import { login, logout } from '../../actions/auth'

test('should setup login action object', () => {
    const action = login('z4356')
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'z4356'
    })
})

test('should setup logout action object', () => {
    const action = logout()
    expect(action).toEqual({type: 'LOGOUT'})
})