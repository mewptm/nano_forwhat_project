import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


import Question from './components/Question/Question.jsx';
import Choice from './components/Choice/Choice.jsx';
import Choice2 from './components/Choice/choice2.jsx';
import Bmi_1 from './components/Bmi/Bmi_1.jsx';
import Bmi_2 from './components/Bmi/Bmi_2.jsx';
import Bmi_3 from './components/Bmi/Bmi_3.jsx';
import Bmi_4 from './components/Bmi/Bmi_4.jsx';
import Bmi_5 from './components/Bmi/Bmi_5.jsx';
import Advice_1 from './components/Bmi/Advice_1.jsx';
import Advice_2 from './components/Bmi/Advice_2.jsx';
import Advice_3 from './components/Bmi/Advice_3.jsx';
import Advice_4 from './components/Bmi/Advice_4.jsx';
import Advice_5 from './components/Bmi/Advice_5.jsx';
import Target from './components/Bmi/Target.jsx';
import Bmi from './components/Bmi/Bmi.jsx';
import Height_1 from './components/Bmi/Height_1.jsx';
import Weight_1 from './components/Bmi/Weight_1.jsx';
import Calendar_1 from './components/Calendar/Calendar_1.jsx';
import Name from './components/Bmi/name.jsx';
import Yesno from './components/Ynquiz/Yesno.jsx'


const router = createBrowserRouter([
  {
    path: "/yesno",
    element: <Yesno/>
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
  {
    path: "/Bmi_1",
    element: <Bmi_1/>,
  },
  {
    path: "/Bmi_2",
    element: <Bmi_2/>,
  },
  {
    path: "/Bmi_3",
    element: <Bmi_3/>,
  },
  {
    path: "/Bmi_4",
    element: <Bmi_4/>,
  },
  {
    path: "/Bmi_5",
    element: <Bmi_5/>,
  },
  {
    path: "/Advice_1",
    element: <Advice_1/>,
  },
  {
    path: "/Advice_2",
    element: <Advice_2/>,
  },
  {
    path: "/Advice_3",
    element: <Advice_3/>,
  },
  {
    path: "/Advice_4",
    element: <Advice_4/>,
  },
  {
    path: "/Advice_5",
    element: <Advice_5/>,
  },
  {
    path: "/Height_1",
    element: <Height_1/>,
  },
  {
    path: "/Weight_1",
    element: <Weight_1/>,
  },
  {
    path: "/Target",
    element: <Target/>,
  },
  {
    path: "/Bmi",
    element: <Bmi/>,
  },
  {
    path: "/Calendar_1",
    element: <Calendar_1/>,
  },
  {
    path: "/Name",
    element: <Name/>,
  },

  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
