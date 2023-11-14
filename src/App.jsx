import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';

export class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <News category="health"/>
      </div>
    )
  }
}

export default App
