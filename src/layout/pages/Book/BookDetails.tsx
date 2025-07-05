import { Button } from "@/components/ui/button";
import { useGetBookIdQuery } from "@/redux/api/books";
import { BadgeCheck, BookOpen } from "lucide-react";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetBookIdQuery(id as string);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError || !data?.data)
    return (
      <p className="text-center mt-10 text-red-500">Book not found......</p>
    );

  const book = data.data;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Book Image */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-[400px] object-contain rounded"
          />
        </div>

        {/* Book Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{book.title}</h1>
          <p className="text-lg text-gray-600">by {book.author}</p>

          <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
            {book.genre}
          </span>

          <div className="flex items-center gap-2 text-sm mt-2">
            {book.available ? (
              <span className="flex items-center text-green-600 font-medium">
                <BadgeCheck size={18} className="mr-1" /> Available
              </span>
            ) : (
              <span className="flex items-center text-red-500 font-medium">
                <BookOpen size={18} className="mr-1" /> Unavailable
              </span>
            )}
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">
            {book.description}
          </p>

          <div className="text-sm text-gray-500">
            <p>
              <strong>ISBN:</strong> {book.isbn}
            </p>
            <p>
              <strong>Copies:</strong> {book.copies}
            </p>
          </div>

          <div className="pt-4">
            <Button onClick={() => window.history.back()}>← Go Back</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
