import React from 'react';
import ReactDOM from 'react-dom/client';

import '@styles/font.css';
import '@styles/main.css';

import { App } from './pages/App/Loadable';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
