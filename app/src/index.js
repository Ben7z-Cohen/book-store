import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

import 'tachyons';

import requestBooksReducer from './redux/books-slice';

import App from './containers/App';
import './index.css';


const store = configureStore({
  reducer: {
    booksReducer: requestBooksReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(thunk),
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
