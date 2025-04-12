import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Убрали useNavigate, так как кнопка перенесена
import './HomePage.css';

function HomePage() {
  const [objects, setObjects] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/objects')
      .then(response => setObjects(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSelectObject = (obj) => {
    setSelectedObject(obj);
  };

  const handleDeleteObject = (id) => {
    axios.delete(`http://localhost:3001/objects/${id}`)
      .then(() => setObjects(objects.filter(obj => obj.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="home-page">
      <h1> Объекты Медицинского учреждения</h1>
      <ul className="object-list">
        {objects.map(obj => (
          <li key={obj.id} className="object-item">
            <Link to={`/detail/${obj.id}`} onClick={() => handleSelectObject(obj)}>
              {obj.name}
            </Link>
            <button 
              className="delete-button" 
              onClick={() => handleDeleteObject(obj.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>

      {selectedObject && (
        <div className="selected-object">
          <h2>Выбранный объект:</h2>
          <p>Название: {selectedObject.name}</p>
          <p>Описание: {selectedObject.securityLevel}</p>
          <p>Риски безопасности: {selectedObject.description}</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;