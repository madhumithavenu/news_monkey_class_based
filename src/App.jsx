import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export class App extends Component {
  render() {
    let apiKey = process.env.REACT_APP_NEWS_API;
    let vCon = 'in';
    let vSiz = 10;
    return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<News apiKey={apiKey} key="general" country={vCon} pageSize={vSiz} />}/>
        <Route path='/business' element={<News apiKey={apiKey} key="business" country={vCon} pageSize={vSiz} category='business' />}/>
        <Route path='/entertainment' element={<News apiKey={apiKey} key="entertainment" country={vCon} pageSize={vSiz} category='entertainment' />}/>
        <Route path='/general' element={<News apiKey={apiKey} key="general" country={vCon} pageSize={vSiz} category='general' />}/>
        <Route path='/health' element={<News apiKey={apiKey} key="health" country={vCon} pageSize={vSiz} category='health' />}/>
        <Route path='/science' element={<News apiKey={apiKey} key="science" country={vCon} pageSize={vSiz} category='science' />}/>
        <Route path='/sports' element={<News apiKey={apiKey} key="sports" country={vCon} pageSize={vSiz} category='sports' />}/>
        <Route path='/technology' element={<News apiKey={apiKey} key="technology" country={vCon} pageSize={vSiz} category='technology' />}/>
      </Routes>
      </BrowserRouter>
    )
  }
}

export default App
