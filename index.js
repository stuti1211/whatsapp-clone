import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the main App component
import { AppProvider } from './context/AppContext'; // Import the AppProvider for global state management
import './styles/App.css'; // Import global styles

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root element
root.render(
  <React.StrictMode>
    <AppProvider> {/* Wrap the App in the AppProvider to provide global context */}
      <App />
    </AppProvider>
  </React.StrictMode>
);
