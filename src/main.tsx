import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { PerformanceProvider } from './contexts/PerformanceContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PerformanceProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PerformanceProvider>
  </StrictMode>
);