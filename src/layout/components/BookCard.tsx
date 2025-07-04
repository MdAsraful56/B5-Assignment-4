import type { Book } from "@/typescript/Types";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div>
      <div className="border p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">{book.title}</h2>
        <p className="text-gray-700">Author: {book.author}</p>
        {/* <p className="text-gray-600">Published: {book.publishedDate}</p> */}
        <p className="text-gray-500">ISBN: {book.isbn}</p>
        <p className="mt-2">{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
