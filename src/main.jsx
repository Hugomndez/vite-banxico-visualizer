import './styles/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FetchProvider } from './contexts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FetchProvider>
      <App />
    </FetchProvider>
  </React.StrictMode>
);
