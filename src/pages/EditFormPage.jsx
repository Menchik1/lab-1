import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditFormPage() {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', securityLevel: '', description: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/objects/${id}`)
      .then(response => setFormData(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/objects/${id}`, formData)
      .then(() => navigate('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Редактировать объект</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Название"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Уровень безопасности"
          value={formData.securityLevel}
          onChange={(e) => setFormData({ ...formData, securityLevel: e.target.value })}
        />
        <textarea
          placeholder="Описание"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
}

export default EditFormPage;