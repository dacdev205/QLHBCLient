import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App.jsx";
import Home from "../pages/Home.jsx";
import AddStudent from "../component/AddStudent.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addStudent",
        element: <AddStudent />,
      },
    ],
  },
]);

export default router;
