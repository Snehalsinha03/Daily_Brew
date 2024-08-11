import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import News from './components/News.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const App = () => {
  const pageSize = 5;
  const apiKey = "544e249dfab84ab88bb3aaf9ac1c3d13";
  const [progress, setProgress] = useState(0);
  const [isDarkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div>
      <Router>
        <Navbar mode={isDarkMode ? 'dark' : 'light'} toggleMode={toggleMode} /> 
        <LoadingBar height={8} color='#f11946' progress={progress} />
        <div style={{ padding: '10px', display: 'flex', justifyContent: 'flex-end' }}>
          <DarkModeSwitch checked={isDarkMode} onChange={toggleMode} size={30} />
        </div>
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
          <Route path="/search" element={<News setProgress={setProgress} apiKey={apiKey} key="search" pageSize={pageSize} country="in" category="search" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
