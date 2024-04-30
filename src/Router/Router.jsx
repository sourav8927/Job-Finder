import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import SalaryPage from "../components/SalaryPage";
import AboutJapan from "../components/AboutJapan";
import CurrentJobs from "../components/CurrentJobs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/about-japan",
            element:<AboutJapan/>
        },
        {
          path:"/salary-estimate",
          element:<SalaryPage/>
        },
        {
          path:"/current-jobs",
          element:<CurrentJobs/>
        }
      ]
    },
  ]);

  export default router;