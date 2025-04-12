import React from 'react';
import rules from '../safetyRules.json'; // Импорт правил
import './SafetyRulesPage.css'; // Стили для страницы

function SafetyRulesPage() {
  return (
    <div className="safety-rules-page">
      <h1>Правила поведения безопасности</h1>
      <ul className="rules-list">
        {rules.rules.map(rule => (
          <li key={rule.id} className="rule-item">
            <h2>{rule.title}</h2>
            <p>{rule.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SafetyRulesPage;