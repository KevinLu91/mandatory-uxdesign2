import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './components/Main';
import Quiz from './components/Quiz';
import Stats from './components/Stats';
import About from './components/About';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Main}/>
      <Route path='/quiz' component={Quiz} />
      <Route path='/stats' component={Stats} />
      <Route path='/about' component={About} />
    </Router>
  );
}

export default App;


