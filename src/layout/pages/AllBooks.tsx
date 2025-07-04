import { useGetAllBookQuery } from "@/redux/api/books";

const AllBooks = () => {
  const { data } = useGetAllBookQuery(undefined);

  if (!data) {
    return <div>Loading...</div>;
  }
  if (data.length === 0) {
    return <div>No books available.</div>;
  }
  // For debugging purposes, you can log the data to the console
  // to see the structure and contents of the fetched books.

  console.log(data);

  return (
    <div className="">
      <h1 className="text-2xl text-center">All Books</h1>
      <p className="text-center">This is the All Books page.</p>
      <div className="">
        {/* {data.map((book, index) => {
          return <BookCard key={index} book={book} />;
        })} */}
      </div>
    </div>
  );
};

export default AllBooks;
