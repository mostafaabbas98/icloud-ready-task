import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './components/Layout';
import 'antd/dist/antd.css';

import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);