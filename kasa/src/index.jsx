import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import FicheLogement from './pages/FicheLogement'; 
import APropos from './pages/Apropos';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './pages/App.css';
 

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
