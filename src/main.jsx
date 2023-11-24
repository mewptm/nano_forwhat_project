import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Ynquiz1 from './components/yesnoQuestion/Ynquiz1';
import Ynquiz2 from './components/yesnoQuestion/Ynquiz2';
import Ynquiz3 from './components/yesnoQuestion/Ynquiz3';
import Question from './components/Question/Question.jsx';
import Choice from './components/Choice/Choice.jsx';
import Choice2 from './components/Choice/choice2.jsx';

const router = createBrowserRouter([
  {
    path: "/yesno_1",
    element: <Ynquiz1/>,
  },
  {
    path: "/yesno_2",
    element: <Ynquiz2/>,
  },
  {
    path: "/yesno_3",
    element: <Ynquiz3/>,
  },
  {
    path: "/question",
    element: <Question/>,
  },
  {
    path: "/Choice",
    element: <Choice/>,
  },
  {
    path: "/Choice2",
    element: <Choice2/>,
  },
  

  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
