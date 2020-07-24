import React, { useContext, useEffect, useState } from 'react';
import Loginpage from './components/Loginpage.js'
import Nameform from "./components/Nameform.js"
import Businessinfo from "./components/Businessinfo.js"
import Nonprofit from "./components/Nonprofit.js"
import Square from './components/Square.js';
import Booths from "./components/Booths.js"
import Sponsorshiplevels from "./components/Sponsorshiplevels.js"
import {Switch, Route, Redirect, useHistory} from "react-router-dom"
import { FormContext } from "./context/FormContext"

function App() {
  const { token, qty, value, hasPayed } = useContext(FormContext)
  const [isLoad, setLoad] = useState(false);
  const history = useHistory()
  useEffect(() => {
    let sqPaymentScript = document.createElement("script");
    // sandbox: https://js.squareupsandbox.com/v2/paymentform
    // production: https://js.squareup.com/v2/paymentform
    sqPaymentScript.src = "https://js.squareupsandbox.com/v2/paymentform";
    sqPaymentScript.type = "text/javascript";
    sqPaymentScript.async = false;
    sqPaymentScript.onload = () => {
      setLoad(true);
    };
    document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
  });

  
  const squarePayment = isLoad ? (
        <Square paymentForm={ window.SqPaymentForm } value = {value} qty={qty}/>
    ) : (
       null
    )
  return (
    <div className="App">
      <Switch>
         <Route exact path = "/" render ={() => token ? <Redirect to = "/form1" /> : <Loginpage />} /> 
         <Route exact path = "/form1" render = {() => token  ? <Nameform /> : <Redirect to = "/" />} />
         <Route exact path = "/form2" render ={() => token ? <Businessinfo /> : <Redirect to = "/" />} />
         <Route exact path = "/form3" render = {() => token ? <Nonprofit /> : <Redirect to = "/" /> } />
         <Route exact path = "/form4" render = {() => token ? <Sponsorshiplevels /> : <Redirect to = "/" />} />
         <Route exact path = "/form5" render ={ () => token ? <div className="App"> {squarePayment} </div> : <Redirect to = "/" />} />
         <Route exact path = "/form6" render = {() => token && hasPayed ? <Booths /> : history.goBack()} />
         <Route path='/opvet' component={() => { window.location.href = 'https://opveteran.org/'  
            return null }}/>
      </Switch>
      
    </div>
  );
} 







export default App; 
