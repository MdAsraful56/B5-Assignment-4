import { useGetAllBookQuery } from "@/redux/api/books";
import type { IBook } from "@/typescript/Types";
import BookCard from "../../components/BookCard";

const AllBooks = () => {
  const { data, isLoading } = useGetAllBookQuery(undefined);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No books available.</div>;
  }

  console.log(data?.data);

  const books = data?.data;

  return (
    <div>
      <h1>All Books</h1>
      <p>List of all books will be displayed here.</p>
      <div className="py-12 lg:py-16 mx-6">
        <div className=" max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book: IBook, index: number) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
