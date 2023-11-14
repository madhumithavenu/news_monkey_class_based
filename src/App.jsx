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
        <Route path='/' element={<News key="general" category='general' />}/>
        <Route path='/business' element={<News key="business" category='business' />}/>
        <Route path='/entertainment' element={<News key="entertainment" category='entertainment' />}/>
        <Route path='/general' element={<News key="general" category='general' />}/>
        <Route path='/health' element={<News key="health" category='health' />}/>
        <Route path='/science' element={<News key="science" category='science' />}/>
        <Route path='/sports' element={<News key="sports" category='sports' />}/>
        <Route path='/technology' element={<News key="technology" category='technology' />}/>
      </Routes>
      </BrowserRouter>
    )
  }
}

export default App
