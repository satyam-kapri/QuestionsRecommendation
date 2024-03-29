import React, { useState } from 'react'
import './App.css'
import Start from './components/Start'
import Quiz from './components/Quiz'
import logo from './assets/coding_ninjas_logo.png'

function App() {

  const [start, setStart] = useState(false);

  return (
    <>
    <div className='navbar'><img src={logo} alt="" width={'200px'} /></div>
   
   
    <div className="quiz">
      { start ? <Quiz /> : <Start props={setStart} />} 
    </div>
   
    </>
  );
}

export default App;