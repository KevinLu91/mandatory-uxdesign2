import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './components/Main';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Main}/>
      <Route path='/quiz' component={Quiz} />
    </Router>
  );
}

export default App;


