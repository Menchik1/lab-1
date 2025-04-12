import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Убедитесь, что стили подключены

function Header() {
  return (
    <header className="header">
      <nav className="nav-links">
        <Link to="/" className="nav-link">Главная</Link>
        <Link to="/add" className="nav-link">Добавить объект</Link>
        <Link to="/safety-rules" className="nav-link">Правила безопасности</Link> {/* Новая кнопка */}
      </nav>
    </header>
  );
}

export default Header;