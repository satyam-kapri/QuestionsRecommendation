import React from 'react'

import Calendar from './Calendar';

function Sidebar({qno,boolArray}) {
  return (
    <div className='sidebar'>
      <Calendar qno={qno} boolArray={boolArray}></Calendar>
    </div>
  )
}

export default Sidebar
