import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddFormPage.css'; // Импорт стилей

function AddFormPage() {
  const [formData, setFormData] = useState({ name: '', securityLevel: '', description: '' });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Название не может быть пустым.';
    if (!formData.securityLevel) newErrors.securityLevel = 'Описание не может быть пустым.';
    if (!formData.description) newErrors.description = 'Риски не могут быть пустыми.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    axios.post('http://localhost:3001/objects', formData)
      .then(() => navigate('/'))
      .catch(error => {
        if (error.response) {
          // Сервер вернул код ошибки
          switch (error.response.status) {
            case 400:
              setServerError('Ошибка 400: Неверные данные.');
              break;
            case 404:
              setServerError('Ошибка 404: Объект не найден.');
              break;
            case 500:
              setServerError('Ошибка 500: Внутренняя ошибка сервера.');
              break;
            default:
              setServerError('Произошла ошибка. Попробуйте позже.');
          }
        } else {
          setServerError('Сетевая ошибка. Попробуйте позже.');
        }
      });
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
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                setErrors({ ...errors, name: '' }); // Убираем ошибку при изменении
              }}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Описание</label>
            <input
              type="text"
              placeholder="Описание"
              value={formData.securityLevel}
              onChange={(e) => {
                setFormData({ ...formData, securityLevel: e.target.value });
                setErrors({ ...errors, securityLevel: '' }); // Убираем ошибку при изменении
              }}
            />
            {errors.securityLevel && <span className="error">{errors.securityLevel}</span>}
          </div>
          <div className="form-group">
            <label>Риски безопасности</label>
            <textarea
              placeholder="Риски безопасности"
              value={formData.description}
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
                setErrors({ ...errors, description: '' }); // Убираем ошибку при изменении
              }}
            />
            {errors.description && <span className="error">{errors.description}</span>}
          </div>
          <button type="submit" className="submit-button">Сохранить</button>
        </form>
        {serverError && <div className="server-error">{serverError}</div>}
      </div>
    </div>
  );
}

export default AddFormPage;
