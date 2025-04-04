import './styles/global.css'; // Importando o global.css aqui
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Rotas from './rotas.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rotas />
  </StrictMode>
);
