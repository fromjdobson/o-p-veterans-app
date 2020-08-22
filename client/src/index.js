import React from 'react'
import ReactDOM from 'react-dom'
import Store from './context/Store'
import App from './components/App'
import './index.css'

function Index() {
  return (
    <Store>
      <App />
    </Store>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))