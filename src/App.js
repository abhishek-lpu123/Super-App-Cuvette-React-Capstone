import './App.css';
import React from 'react';
import Front from './components/Home/FrontPage.jsx';
import Category from './components/Category/Category.jsx';
import Browse from './components/Browse/Browse';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Front/>} />
        <Route path="/category" element={ <Category/>} />
        <Route path="/browse" element={<Browse/>} />
      </Routes>
    </div>
  );
}

export default App;
