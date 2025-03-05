import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Импорт стилей

function Header() {
  return (
    <header className="header">
      <nav className="nav-links">
        <Link to="/" className="nav-link">Главная</Link>
        <Link to="/add" className="nav-link">Добавить объект</Link>
      </nav>
    </header>
  );
}

export default Header;