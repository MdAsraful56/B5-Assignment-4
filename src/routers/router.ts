import App from "@/App.tsx";
import { AddBook } from "@/layout/pages/Book/AddBook.tsx";
import AllBooks from "@/layout/pages/Book/AllBooks.tsx";
import BookDetails from "@/layout/pages/Book/BookDetails.tsx";
import { BorrowSummary } from "@/layout/pages/BorrowSummary.tsx";
import NotFoundPage from "@/layout/pages/NotFoundPage.tsx";
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
        path: "/books",
        Component: AllBooks,
      },
      {
        path: "/books/:bookId",
        Component: BookDetails,
      },
      {
        path: "/create-book",
        Component: AddBook,
      },
      // {
      //   path: "/edit-book/:bookId",
      //   Component: UpdateBook,
      // },
      {
        path: "/borrow-summary",
        Component: BorrowSummary,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);
export default router;

// /books – Displays a list of all books with options to view, edit, delete, and borrow.
// /create-book – Form interface to add a new book to the system.
// /books/:id – Detailed view of a single book’s information.
// /edit-book/:id – Interface to update an existing book’s details.
// /borrow/:bookId – Form to borrow a selected book.
// /borrow-summary – Displays an aggregated summary of all borrowed books.
