import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

// context provider
import MovieProvider from "./context/movie.context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <App />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
); // Here "MovieProvider" is used to wrap(send) the data to the "App.jsx" file. All the pages in the "App.jsx" file can use the "MovieProvider" data..
