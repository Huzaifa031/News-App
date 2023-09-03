import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={5} country="in" category="general" />} />
          <Route exact path="/business" element={<News key="business" pageSize={5} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News key="general" pageSize={5} country="in" category="general" />} />
          <Route exact path="/health" element={<News key="health" pageSize={5} country="in" category="health" />} />
          <Route exact path="/science" element={<News key="science" pageSize={5} country="in" category="science" />} />
          <Route exact path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
