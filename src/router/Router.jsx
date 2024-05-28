import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App.jsx";
import AddStudent from "../component/AddStudent.jsx";
import Table from "../component/Table.jsx";
import StudentDetail from "../component/StudentDetail.jsx";
import StudentEdit from "../component/StudentEdit.jsx";
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
      {
        path: "/student-detail/:id",
        element: <StudentDetail />,
      },
      {
        path: "/student-edit/:id",
        element: <StudentEdit />,
      },
    ],
  },
]);

export default router;
