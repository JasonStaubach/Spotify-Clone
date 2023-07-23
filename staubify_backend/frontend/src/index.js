
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import configureStore from './store';
import { csrfFetch, restoreCSRF } from './store/csrf';
import * as sessionActions from './store/session'

// renderApplication = () => 
const store = configureStore();
// console.log(store)
const renderApplication = () => {
  let container = document.getElementById('root')
  createRoot(container).render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>
  );}

//add whatever you need to call while testing here
if (process.env.NODE_ENV !== 'production') { 
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}


if (sessionStorage.getItem("X-CSRF-Token") === null ) {
  restoreCSRF().then(renderApplication());
} else {
  renderApplication();
}
// renderApplication()

