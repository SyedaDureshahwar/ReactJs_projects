import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Condition } from './Condition';
import Form from './Form';
import Tenary from './Tenary';
import ReactNotification from './ReactNotification';
import ROTIng from "./ROTIng"
import Header from './components/Header';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    Component:<Home></Home>
  },
  {
    path: "about",
    Component:<About/>
  },
  {
    path: "contact",
    Component:<Contact/>
  },{
    path: "*",
    Component:<NotFound/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Home></Home>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
