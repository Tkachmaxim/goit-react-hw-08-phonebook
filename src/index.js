import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from 'App';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
