import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import FormProvider from "./context/FormContext"
import {BrowserRouter} from "react-router-dom"

import './css/index.css'


ReactDOM.render(
  
    <BrowserRouter>
      {/* <FormProvider> */}
        <App />
      {/* </FormProvider> */}
    </BrowserRouter>
  ,
  document.getElementById('root')
);


