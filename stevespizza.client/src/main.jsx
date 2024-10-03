// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import for React 18
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Create root element for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use root.render instead of ReactDOM.render
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
