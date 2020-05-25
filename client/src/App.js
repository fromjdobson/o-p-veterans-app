import React from 'react';

import './css/app.css'
import TempNavBar from './components/TempNavBar'
import SponsorshipDisplay from './components/SponsorshipDisplay'
import FormDisplay from './components/FormDisplay'

function App() {
  return (
    <div className="app-container">
      <TempNavBar />
      <div className='display-container'>
        <SponsorshipDisplay />
        <FormDisplay />
      </div>
    </div>
  );
}

export default App;
