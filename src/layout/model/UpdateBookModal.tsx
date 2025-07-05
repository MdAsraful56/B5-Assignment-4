import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import toast from "react-hot-toast";

import { useUpdateBookMutation } from "@/redux/api/books";
import type { IBook } from "@/typescript/Types";

const UpdateBookModal = ({
  book,
  onClose,
  refetch,
}: {
  book: IBook;
  onClose: () => void;
  refetch: () => void;
}) => {
  const [updateBook] = useUpdateBookMutation();

  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    genre: book.genre,
    image: book.image,
    copies: book.copies,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "copies" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateBook({ id: book._id, body: formData })
      .unwrap()
      .then(() => {
        toast.success("Book updated successfully!");
        refetch();
        onClose();
      })
      .catch(() => toast.error("Failed to update book"));
  };

  return (
    <DialogContent className="sm:max-w-[350px]">
      <form onSubmit={handleSubmit}>
        <DialogTitle>Update Book</DialogTitle>
        <DialogDescription className="mb-4">
          Modify the book details below.
        </DialogDescription>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label>Title</Label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label>Author</Label>
            <Input
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label>Copies</Label>
            <Input
              name="copies"
              type="number"
              value={formData.copies}
              min={1}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label>Image URL</Label>
            <Input
              name="image"
              value={formData.image}
              onChange={handleChange}
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
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Update Book
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default UpdateBookModal;
