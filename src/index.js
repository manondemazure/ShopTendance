import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers"
import { getPost } from './actions/post.action';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getPost())

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <App />}/>
          <Route path="/homme" element={<App/>}/>
          <Route path="/femme" element={<App/>}/>
          <Route path="/unisexe" element={<App/>}/>
          <Route path="/accessoire" element={<App/>}/>
          <Route path="/chaussure" element={<App/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>,
	document.getElementById("root")
);