import React from 'react';

import './App.css';

import Phones from "./components/Phones.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Phones />
    </div>
  );
}

export default App;
