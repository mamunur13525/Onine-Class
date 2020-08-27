import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Course from './Components/Course/Course';



function App() {
  const title = {
    color: "yellow",
    background: "gray",
    padding: "20px"
  }


  return (
      <div>
        <h2 style={title} className="text-center font-weight-bold">Online Full Course</h2>
        <Course></Course>
      </div>
  );
}

export default App;
