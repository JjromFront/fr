import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssBaseline } from '@mui/material'; // Importamos CssBaseline de MUI para establecer un estilo básico

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline /> {/* Usamos CssBaseline de MUI para establecer un estilo básico */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
