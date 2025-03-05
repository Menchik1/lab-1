import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './DetailPage.css'; // Импорт стилей

function DetailPage() {
  const { id } = useParams();
  const [object, setObject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/objects/${id}`)
      .then(response => setObject(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!object) return <div>Загрузка...</div>;

  return (
    <div className="detail-page">
      <h1>Детали объекта</h1>
      <div className="detail-container">
        <div className="detail-item">
          <label>Название:</label>
          <p>{object.name}</p>
        </div>
        <div className="detail-item">
          <label>Уровень безопасности:</label>
          <p>{object.securityLevel}</p>
        </div>
        <div className="detail-item">
          <label>Описание:</label>
          <p>{object.description}</p>
        </div>
        <button className="back-button" onClick={() => navigate('/')}>Назад</button>
      </div>
    </div>
  );
}

export default DetailPage;