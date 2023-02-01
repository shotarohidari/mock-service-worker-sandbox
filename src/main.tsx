import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LoginContextWrapper } from './contexts/LoginContext';
import { worker } from './mocks/browser';
import { LoginPage } from './pages/LoginPage';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoginContextWrapper>
      <App />
    </LoginContextWrapper>
  </React.StrictMode>,
);
