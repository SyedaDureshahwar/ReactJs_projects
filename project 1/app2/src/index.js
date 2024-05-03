import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Courses from './pages/Courses';
import Subjects from './pages/Subjects';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './pages/Blog';
import Bolgdetails from './pages/Bolgdetails';


const root = ReactDOM.createRoot(document.getElementById('root'));

let routess = createBrowserRouter([
  {
    path: "/",
    element: <Courses></Courses>,
  },
  {
    path: "/subject",
    element: <Subjects></Subjects>,
  }
  ,
  {
    path: "/blog",
    element: <Blog></Blog>,
  }
  ,
  {
    path: "/blog/:ids",
    element: <Bolgdetails></Bolgdetails>,
  }
]);

root.render(
  <React.StrictMode>
 <RouterProvider router={routess} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
