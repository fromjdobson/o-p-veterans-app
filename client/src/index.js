import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import FormProvider from "./context/FormContext"
import {BrowserRouter} from "react-router-dom"

import './css/index.css'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <FormProvider> */}
        <App />
      {/* </FormProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

