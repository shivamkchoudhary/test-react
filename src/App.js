import React from 'react';
import profileImage from './img/cat-pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> My test React App</h1>
      <h2> Creator: Shivam :) </h2>
      <img src={profileImage} alt="profile-imag" />
    </div>
  );
}

export default App;
