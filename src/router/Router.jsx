import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App.jsx";
import AddStudent from "../component/AddStudent.jsx";
import Table from "../component/Table.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Table />,
      },
      {
        path: "/addStudent",
        element: <AddStudent />,
      },
    ],
  },
]);

export default router;
