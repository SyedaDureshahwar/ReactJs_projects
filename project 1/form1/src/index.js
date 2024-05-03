import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Forgot from './UIComponents/Forgot';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Reset from './Form2/Reset';

const routerss = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/password",
    element: <Forgot></Forgot>,
  },
]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={routerss} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
