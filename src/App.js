import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


import './App.css';

import Phones from "./components/Phones.js";
import Navbar from "./components/Navbar.js";
import SinglePhone from "./components/SinglePhone.js"
import Home from "./components/Home.js"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route exact path="/phones" component={Phones}/>
        <Route path="/phones/:id" component={SinglePhone}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
