// App.js
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AddFormPage from './pages/AddFormPage';
import EditFormPage from './pages/EditFormPage';
import SafetyRulesPage from './pages/SafetyRulesPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Состояние аутентификации

  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/login" 
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} 
        />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/add" element={<AddFormPage />} />
        <Route path="/edit/:id" element={<EditFormPage />} />
        <Route path="/safety-rules" element={<SafetyRulesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
