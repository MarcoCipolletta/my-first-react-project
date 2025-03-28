import React from 'react';
import './About.scss';

const About: React.FC = () => {
  return (
    <div className="container about">
      <h1>About This App</h1>
      <p>
        Questa è una semplice applicazione Todo List sviluppata con React, Vite e TypeScript.
        L'app include routing e gestione dello stato per permetterti di aggiungere, completare e rimuovere attività.
      </p>
    </div>
  );
};

export default About;
