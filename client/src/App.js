import React, { useContext, useEffect, useState } from 'react';
import Loginpage from './components/Loginpage.js'
import Nameform from "./components/Nameform.js"
import Businessinfo from "./components/Businessinfo.js"
import Nonprofit from "./components/Nonprofit.js"
import Square from './components/Square.js';
import Booths from "./components/Booths.js"
import Sponsorshiplevels from "./components/Sponsorshiplevels.js"
import Profile from "./components/Profilepage.js"
import {Switch, Route, Redirect, useHistory, Link} from "react-router-dom"
import { FormContext } from "./context/FormContext"
import Adminpage from './components/Adminpage.js';

function App() {
  const { uid, value, hasPayed } = useContext(FormContext)
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

  
  const squarePayment = isLoad && <Square paymentForm={ window.SqPaymentForm } value = {value} />
  
  return (
    <div className="App">
      {uid ? <Link className = "link" to = "/profile">Profile</Link> : null}
      {uid === "6QOK01bDhZNBCdL8fumFJnQ2V2T2" ? <Link className = "link" to = "/viewer">Admin</Link> : null}
      <Switch>
         <Route exact path = "/"      render ={() => uid ? <Redirect to = "/form1" /> : <Loginpage />} />
         <Route exact path = "/form1" render ={() => uid ? <Nameform /> : <Redirect to = "/" />} />
         <Route exact path = "/form2" render ={() => uid ? <Businessinfo /> : <Redirect to = "/" />} />
         <Route exact path = "/form3" render ={() => uid ? <Nonprofit /> : <Redirect to = "/" /> } />
         <Route exact path = "/form4" render ={() => uid ? <Sponsorshiplevels /> : <Redirect to = "/" />} />
         <Route exact path = "/form5" render ={() => uid ? <div className="App"> {squarePayment} </div> : <Redirect to = "/" />} />
         <Route exact path = "/form6" render ={() => uid && hasPayed ? <Booths /> : history.goBack()} />
         <Route exact path = "/viewer" render={() => uid === "6QOK01bDhZNBCdL8fumFJnQ2V2T2" ? <Adminpage /> : <Redirect to = "/" />} />
         {uid ?  <Route exact path = "/profile" render = {() => uid ?  <Profile /> : <Redirect to = "/" />} /> : ""} 
         <Route path='/opvet' component={() => { window.location.href = 'https://opveteran.org/'  
            return null }}/>
      </Switch>
      
    </div>
  );
} 







export default App; 
