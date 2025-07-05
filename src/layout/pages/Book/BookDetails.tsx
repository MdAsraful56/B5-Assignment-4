import borrowIcon from "@/assets/Icons/borrow-book.png";
import deleteIcon from "@/assets/Icons/delete.png";
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
import {
  useDeleteBookMutation,
  useGetAllBookQuery,
  useGetBookIdQuery,
} from "@/redux/api/books";
import {
  useCreateBorrowMutation,
  useGetAllBorrowQuery,
} from "@/redux/api/borrow";
import { BadgeCheck, BookOpen } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
// import updateIcon from "@/assets/Icons/update.png";

const BookDetails = () => {
  const [deleteBook] = useDeleteBookMutation();
  const { refetch } = useGetAllBookQuery(undefined);
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const [createBorrow] = useCreateBorrowMutation();
  const { refetch: borrowRefetch } = useGetAllBorrowQuery(undefined);
  const navigate = useNavigate();

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

  const { id } = useParams();
  console.log(id);
  const { data, isError, isLoading } = useGetBookIdQuery(id as string);

  if (!id) {
    return (
      <p className="text-center mt-10 text-red-500">Book ID is missing.</p>
    );
  }

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
            <Button onClick={() => window.history.back()}> ← Go Back</Button>
            <div className="flex justify-between gap-1">
              {/* <Button
                onClick={() => _id && handleUpdate(_id)}
                className="flex items-center gap-1 px-2 py-1 text-xs h-auto"
              >
                <img src={updateIcon} alt="update" className="h-4 w-4" />
                Update
              </Button> */}
              <Button
                onClick={() => id && handleDelete(id)}
                variant="destructive"
                className="flex items-center gap-1 px-2 py-1 text-xs h-auto"
              >
                <img src={deleteIcon} alt="delete" className="h-4 w-4" />
                Delete
              </Button>

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
                      id && handleBorrowBook(id);
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
      </div>
    </div>
  );
};

export default BookDetails;
