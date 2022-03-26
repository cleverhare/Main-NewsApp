import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  //  s = "Soumyajit"
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>

    )
  }
}

