import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddFormPage.css'; // Импорт стилей

function AddFormPage() {
  const [formData, setFormData] = useState({ name: '', securityLevel: '', description: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/objects', formData)
      .then(() => navigate('/'))
      .catch(error => console.error(error));
  };

  return (
    <div className="add-form-page">
      <h1>Добавить объект</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Название</label>
            <input
              type="text"
              placeholder="Название"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Уровень безопасности</label>
            <input
              type="text"
              placeholder="Уровень безопасности"
              value={formData.securityLevel}
              onChange={(e) => setFormData({ ...formData, securityLevel: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Описание</label>
            <textarea
              placeholder="Описание"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <button type="submit" className="submit-button">Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default AddFormPage;