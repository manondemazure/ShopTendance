import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers"
import { getPost } from './actions/post.action';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getPost())

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
	document.getElementById("root")
);