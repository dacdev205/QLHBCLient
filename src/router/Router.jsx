import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App.jsx";
import Home from "../pages/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
