import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AddFormPage from './pages/AddFormPage';
import EditFormPage from './pages/EditFormPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/add" element={<AddFormPage />} />
        <Route path="/edit/:id" element={<EditFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;