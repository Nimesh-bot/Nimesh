import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ThemeProvider from './context/theme-context'
import StateProvider from './context/state-context';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { ResultContextProvider } from './context/ResultContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
      <ThemeProvider>
        <StateProvider>
          <ResultContextProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </ResultContextProvider>
        </StateProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
