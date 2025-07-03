import { createBrowserRouter } from "react-router";
import AllBooks from "../layout/pages/";
import Home from "../layout/pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    // element: Home,
    Component: Home, // Ensure the component is rendered correctly
    children: [
      {
        path: "/all-books",
        Component: AllBooks,
      },
    ],
  },
]);
export default router;
