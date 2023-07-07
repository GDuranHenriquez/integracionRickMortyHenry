import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  //Encierro mi app para que funcionen las configuraciones de las Routes en app.js
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')  
)
