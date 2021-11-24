import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Home from './components/ui/Home';

class App extends Component {

  render() {
    return(
      <div>
        App.js
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default connect(null)(App);