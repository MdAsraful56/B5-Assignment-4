import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { BadgeCheck, BookOpen } from "lucide-react";

import borrowIcon from "@/assets/Icons/borrow-book.png";
import deleteIcon from "@/assets/Icons/delete.png";
import updateIcon from "@/assets/Icons/update.png";
import viewIcon from "@/assets/Icons/view.png";

import { useDeleteBookMutation, useGetAllBookQuery } from "@/redux/api/books";
import {
  useCreateBorrowMutation,
  useGetAllBorrowQuery,
} from "@/redux/api/borrow";

import type { IBook } from "@/typescript/Types";
import UpdateBookModal from "../model/UpdateBookModal";

// import UpdateBookModal from "@/components/UpdateBookModal";

const BookCard = ({ book }: { book: IBook }) => {
  const { _id, title, author, image, genre, copies, available } = book;
  const [openUpdate, setOpenUpdate] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const [deleteBook] = useDeleteBookMutation();
  const { refetch } = useGetAllBookQuery(undefined);

  const [createBorrow] = useCreateBorrowMutation();
  const { refetch: borrowRefetch } = useGetAllBorrowQuery(undefined);

  const navigate = useNavigate();

  const handleView = (id: string) => {
    console.log(`Viewing book with ID: ${id}`);
    navigate(`/books/${id}`);
  };

  // const handleUpdate = (id: string) => {
  //   console.log(`Updating book with ID: ${id}`);
  //   navigate(`/edit-book/${id}`);
  // };

  const handleDelete = (id: string) => {
    deleteBook(id)
      .unwrap()
      .then(() => {
        toast.success("Book deleted successfully!");
        refetch();
      })
      .catch(() => toast.error("Failed to delete book"));
  };

  const handleBorrowBook = async (id: string) => {
    if (!date) {
      toast.error("Please select a due date");
      return;
    }

    const borrowData = {
      book: id,
      quantity,
      dueDate: date,
    };

    try {
      await createBorrow(borrowData).unwrap();
      toast.success("Book borrowed successfully");
      refetch();
      borrowRefetch();
      navigate("/borrow-summary");
    } catch (error) {
      const err = error as { data?: { message?: string } };
      toast.error(err.data?.message || "Something went wrong");
    }
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

        {/* Action buttons */}
        <div className="space-y-2 pt-2">
          <div className="flex justify-between gap-1">
            <Button
              onClick={() => _id && handleView(_id)}
              className="flex items-center gap-1 px-2 py-1 text-xs h-auto"
            >
              <img src={viewIcon} alt="view" className="h-4 w-4" />
              View
            </Button>
            {/* <Button
              onClick={() => _id && handleUpdate(_id)}
              className="flex items-center gap-1 px-2 py-1 text-xs h-auto"
            >
              <img src={updateIcon} alt="update" className="h-4 w-4" />
              Update
            </Button> */}

            <Dialog open={openUpdate} onOpenChange={setOpenUpdate}>
              <DialogTrigger asChild>
                <Button
                  onClick={() => setOpenUpdate(true)}
                  className="flex items-center gap-1 px-2 py-1 text-xs h-auto"
                >
                  <img src={updateIcon} alt="update" className="h-4 w-4" />
                  Update
                </Button>
              </DialogTrigger>

              {_id && (
                <UpdateBookModal
                  book={book}
                  refetch={refetch}
                  onClose={() => setOpenUpdate(false)}
                />
              )}
            </Dialog>

            <Button
              onClick={() => _id && handleDelete(_id)}
              variant="destructive"
              className="flex items-center gap-1 px-2 py-1 text-xs h-auto"
            >
              <img src={deleteIcon} alt="delete" className="h-4 w-4" />
              Delete
            </Button>
          </div>

          {/* Borrow Button & Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-1 px-3 py-1 text-xs h-auto w-full">
                <img src={borrowIcon} alt="borrow" className="h-5 w-5" />
                <span className="text-blue-600 font-medium">Borrow</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[300px]">
              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  _id && handleBorrowBook(_id);
                }}
              >
                <DialogTitle>Borrow Books</DialogTitle>
                <DialogDescription className="mb-4">
                  Enter quantity and due date.
                </DialogDescription>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>Quantity</Label>
                    <Input
                      type="number"
                      value={quantity}
                      min={1}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label>Due Date</Label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </div>
                </div>

                <DialogFooter className="pt-4">
                  <DialogClose asChild>
                    <Button variant="outline" type="button">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    className="bg-sky-500 hover:bg-sky-600 text-white"
                  >
                    Borrow Book
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
