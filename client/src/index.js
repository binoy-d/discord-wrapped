import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WrappedPage from './WrappedPage/WrappedPage';
import LandingPage from "./LandingPage/LandingPage";
import TeamPage from "./TeamPage/TeamPage";
import FAQPage from "./FAQPage/FAQPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<LandingPage />} />
        <Route path="/wrapped" element={<WrappedPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Route>
    </Routes>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
