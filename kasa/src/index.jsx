import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FicheLogement from './FicheLogement'; 
import APropos from './Apropos';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/FicheLogement',
    element: <FicheLogement />,
  },
  {
    path: '/Apropos',
    element: <APropos />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
