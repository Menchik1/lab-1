import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Импорт стилей

function HomePage() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/objects')
      .then(response => setObjects(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/objects/${id}`)
      .then(() => setObjects(objects.filter(obj => obj.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="home-page">
      <h1>Список объектов охраны</h1>
      <ul className="object-list">
        {objects.map(obj => (
          <li key={obj.id} className="object-item">
            <Link to={`/detail/${obj.id}`}>{obj.name}</Link>
            <button className="delete-button" onClick={() => handleDelete(obj.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;