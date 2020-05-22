import React from 'react'

import LeftDisplay from './components/LeftDisplay'
import FormDisplay from './components/FormDisplay'


import './css/app.css'

const App = () => {
  return (
    <div className='app-container'>
      <LeftDisplay />
      <FormDisplay />
    </div>
  )
}

export default App

// import React, { useContext } from 'react';
// import Loginpage from './components/Loginpage.js'
// import Nameform from "./components/Nameform.js"
// import Businessinfo from "./components/Businessinfo.js"
// import Nonprofit from "./components/Nonprofit.js"
// import Sponsorshiplevels from "./components/Sponsorshiplevels.js"
// import {Switch, Route, Redirect} from "react-router-dom"
// import { FormContext } from "./context/FormContext"

// function App() {
//   const { token } = useContext(FormContext)
//   return (
//     <div className="App">
//       <Switch>
      
//          <Route exact path = "/" render ={() => token ? <Redirect to = "/form1" /> : <Loginpage />} /> 
//          <Route exact path = "/form1" render = {() => token  ? <Nameform /> : <Redirect to = "/" />} />
//          <Route exact path = "/form2" render ={() => token ? <Businessinfo /> : <Redirect to = "/" />} />
//          <Route exact path = "/form3" render = {() => token ? <Nonprofit /> : <Redirect to = "/" /> } />
//          <Route exact path = "/form4" render = {() => token ? <Sponsorshiplevels /> : <Redirect to = "/" />} />
//       </Switch>
//     </div>
//   );
// }

// export default App;
