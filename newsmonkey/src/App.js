import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 9;
  const apiKey = 'abbcc7faec4c4683a787aa39760377fd';
  // const apiKey = '4ae6fa6fed6d4cfd96f49abae691de61';
  // const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Navbar/>

      <LoadingBar
        color='#f11946'
        progress={progress}
        height={4}
      />

      <Routes>
        <Route path="/" element= { <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" /> } />
        <Route path="/science" element= { <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" /> } />
        <Route path="/business" element= { <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" /> } />
        <Route path="/technology" element= { <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" /> } />
        <Route path="/entertainment" element= { <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /> } />
        <Route path="/health" element= { <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" /> } />
        <Route path="/sports" element= { <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" /> } />
      </Routes>
    </div>
  )
}

export default App;