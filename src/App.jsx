import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<News category='general' />}/>
        <Route path='/business' element={<News category='business' />}/>
        <Route path='/entertainment' element={<News category='entertainment' />}/>
        <Route path='/general' element={<News category='general' />}/>
        <Route path='/health' element={<News category='health' />}/>
        <Route path='/science' element={<News category='science' />}/>
        <Route path='/sports' element={<News category='sports' />}/>
        <Route path='/technology' element={<News category='technology' />}/>
      </Routes>
      </BrowserRouter>
    )
  }
}

export default App
