import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

const store = configureStore()
console.log('test');

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

// console.log(store.getState());


ReactDOM.render(jsx, document.getElementById('app'))
