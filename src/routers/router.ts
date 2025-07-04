import App from "@/App.tsx";
import { AddBook } from "@/layout/pages/AddBook.tsx";
import AllBooks from "@/layout/pages/AllBooks.tsx";
import { BorrowSummary } from "@/layout/pages/BorrowSummary.tsx";
import { createBrowserRouter } from "react-router";
import Home from "../layout/pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    // element: Home,
    Component: App, // Ensure the component is rendered correctly
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/all-books",
        Component: AllBooks,
      },
      {
        path: "/create-book",
        Component: AddBook,
      },
      {
        path: "/borrowSummary",
        Component: BorrowSummary,
      },
    ],
  },
]);
export default router;
