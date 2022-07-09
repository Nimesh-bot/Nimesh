import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeProvider from './context/theme-context'
import StateProvider from './context/state-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <StateProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StateProvider>
  </ThemeProvider>
);
