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
import Ynquiz4 from './components/yesnoQuestion/Ynquiz4';
import Ynquiz5 from './components/yesnoQuestion/Ynquiz5';
import Ynquiz6 from './components/yesnoQuestion/Ynquiz6';
import Ynquiz7 from './components/yesnoQuestion/Ynquiz7';
import Ynquiz8 from './components/yesnoQuestion/Ynquiz8';
import Ynquiz9 from './components/yesnoQuestion/Ynquiz9';
import Ynquiz10 from './components/yesnoQuestion/Ynquiz10';
import Ynquiz11 from './components/yesnoQuestion/Ynquiz11';
import Ynquiz12 from './components/yesnoQuestion/Ynquiz12';
import Ynquiz13 from './components/yesnoQuestion/Ynquiz13';
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
    path: "/yesno_4",
    element: <Ynquiz4/>,
  },
  {
    path: "/yesno_5",
    element: <Ynquiz5/>,
  },
  {
    path: "/yesno_6",
    element: <Ynquiz6/>,
  },
  {
    path: "/yesno_7",
    element: <Ynquiz7/>,
  },
  {
    path: "/yesno_8",
    element: <Ynquiz8/>,
  },
  {
    path: "/yesno_9",
    element: <Ynquiz9/>,
  },
  {
    path: "/yesno_10",
    element: <Ynquiz10/>,
  },
  {
    path: "/yesno_11",
    element: <Ynquiz11/>,
  },
  {
    path: "/yesno_12",
    element: <Ynquiz12/>,
  },
  {
    path: "/yesno_13",
    element: <Ynquiz13/>,
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
