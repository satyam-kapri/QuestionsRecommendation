import React from 'react';

function Calendar({qno,boolArray}) {
 
  const questionNumbers = Array.from({ length: 45 }, (_, index) => index + 1);

  return (
    <div className="calendar">
      <h2>Questions</h2>
      <div className="calendar-grid">
        {questionNumbers.map(number => (
          <div key={number} className="calendar-cell" style={number<=qno?(boolArray[number-1]===true?{background:'rgb(0 182 0)'}:{background:'rgb(255 101 0)'}):{}}>
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
