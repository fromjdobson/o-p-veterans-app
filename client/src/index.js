import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import AuthProvider from './context/Auth'
// import App from './App/'
import App from './old/testExampleAuth/'

ReactDOM.render(
    <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthProvider>, 
    document.getElementById('root'))