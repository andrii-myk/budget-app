import { createStore } from 'redux'


const incrementCount = ({ incrementBy = 1 }= {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
})
const resetCount = () => ({
    type: 'RESET'
})

// Reducers

const countReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':       
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET': 
            return {
                count: 0
            }
        case 'SET': 
            return {
                count: action.set
            }
        default: 
            return state
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
    
})


store.dispatch(incrementCount({incrementBy: 11}))

store.dispatch(decrementCount({decrementBy: 2}))

// store.dispatch({
//     type: 'RESET',
// })
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// })

// store.dispatch({
//     type: 'SET',
//     count: 101
// })



// // console.log(store.getState());
