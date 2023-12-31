import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CalculatorApp } from './app/calculator-app';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CalculatorApp />
    </Provider>
  </React.StrictMode>
);
