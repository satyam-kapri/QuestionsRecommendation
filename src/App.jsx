import React, { useState } from 'react'
import './App.css'
import Start from './components/Start'
import Quiz from './components/Quiz'
import logo from './assets/coding_ninjas_logo.png'

function App() {

  const [start, setStart] = useState(false);
  const [user,setuser]=useState('');
  return (
    <>
    <div className='navbar'><img src={logo} alt="" width={'200px'} /></div>
   
   
    <div className="quiz">
      { start ? <Quiz user={user}/> : <Start setStart={setStart} setuser={setuser} />} 
    </div>
   
    </>
  );
}

export default App;