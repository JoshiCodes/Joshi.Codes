import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import reportWebVitals from './reportWebVitals';

import App from './App';
import Contact from './pages/contact';
import NotFound from './pages/errors';

import Navbar from './components/navbar';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import WelcomePopup from "./components/popup";

ReactDOM.render(
  <React.StrictMode>
      <WelcomePopup />
      <BrowserRouter>
          <Routes>
              <Route path={"/*"} element={<Navbar />} />
          </Routes>
          <Routes>
              <Route path={"/"} element={<App />} />
              <Route path={"/contact"} element={<Contact />} />
              <Route path={"*"} element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
