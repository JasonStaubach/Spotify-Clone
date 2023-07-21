
import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';

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

renderApplication()

