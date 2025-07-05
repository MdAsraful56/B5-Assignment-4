import borrowIcon from "@/assets/Icons/borrow-book.png";
import deleteIcon from "@/assets/Icons/delete.png";
import updateIcon from "@/assets/Icons/update.png";
import viewIcon from "@/assets/Icons/view.png";
import { Button } from "@/components/ui/button";
import type { IBook } from "@/typescript/Types";
import { BadgeCheck, BookOpen } from "lucide-react";
import { useNavigate } from "react-router";

const BookCard = ({ book }: { book: IBook }) => {
  const { _id, title, author, image, genre, copies, available } = book;
  const navigate = useNavigate();

  const handleView = (id: string) => {
    // Logic to handle view action, e.g., navigate to book details page
    console.log(`Viewing book with ID: ${id}`);
    navigate(`/all-books/${id}`);
  };

  return (
    <div className="rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden w-[260px] border border-gray-200 bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain bg-gray-100 rounded-t-xl p-3"
      />

      <div className="p-3 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800 leading-tight">
          {title}
        </h2>
        <p className="text-xs text-gray-500">by {author}</p>
        <span className="text-[10px] font-medium inline-block px-2 py-0.5 bg-blue-100 text-blue-600 rounded">
          {genre}
        </span>

        <div className="flex justify-between items-center text-xs mt-1">
          <span className="text-gray-600">Copies: {copies}</span>
          <span
            className={`font-medium flex items-center gap-1 ${
              available ? "text-green-600" : "text-red-500"
            }`}
          >
            {available ? <BadgeCheck size={14} /> : <BookOpen size={14} />}
            {available ? "Available" : "Unavailable"}
          </span>
        </div>

        <div className="space-y-2 pt-2">
          {/* Top buttons */}
          <div className="flex justify-between gap-1">
            <Button
              onClick={() => _id && handleView(_id)}
              className="flex items-center gap-1 px-2 py-1 text-xs h-auto"
            >
              <img src={viewIcon} alt="view" className="h-4 w-4" />
              View
            </Button>
            <Button className="flex items-center gap-1 px-2 py-1 text-xs h-auto">
              <img src={updateIcon} alt="update" className="h-4 w-4" />
              Update
            </Button>
            <Button
              variant="destructive"
              className="flex items-center gap-1 px-2 py-1 text-xs h-auto"
            >
              <img src={deleteIcon} alt="delete" className="h-4 w-4" />
              Delete
            </Button>
          </div>

          {/* Borrow button */}
          <div className="flex justify-center">
            <Button className="flex items-center gap-1 px-3 py-1 text-xs h-auto">
              <img src={borrowIcon} alt="borrow" className="h-5 w-5" />
              <span className="text-blue-600 font-medium">Borrow</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
