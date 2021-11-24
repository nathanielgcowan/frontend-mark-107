import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';


import Header from './components/ui/Header';
import Home from './components/ui/Home';
import Nav from './components/ui/Nav';
import NewMusicForm from './components/NewMusicForm';
import MusicContainer from './containers/MusicContainer';

class App extends Component {

  render() {
    return (
      <Router>
        <Nav />
        <Header />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/new" element={<NewMusicForm />} />
            <Route exact path="/music" element={<MusicContainer />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default connect(null)(App);