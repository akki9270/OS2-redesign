import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import * as ReactDOMClient from 'react-dom/client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import { theme } from './theme';
import { store, persistor } from '../src/store/ConfigureStore';

import App from './App';
import Loader from './components/Loader';

import 'react-toastify/dist/ReactToastify.css';
import './scss/main.scss';

// const mountNode = document.getElementById('root');
const root = ReactDOMClient.createRoot(document.getElementById('root')!);

root.render(
  <React.Fragment>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Loader />
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>  
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
    <ToastContainer newestOnTop />
  </React.Fragment>
);
