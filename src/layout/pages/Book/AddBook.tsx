import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBookMutation, useGetAllBookQuery } from "@/redux/api/books";
import type { IBook } from "@/typescript/Types";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function AddBook() {
  const [createBook] = useCreateBookMutation();
  const [open, setOpen] = useState(false);
  const { refetch } = useGetAllBookQuery(undefined);
  const navigate = useNavigate();

  const {
    register: addBook,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IBook>();

  const onSubmit = (data: IBook) => {
    console.log("Form Data:", data);
    setOpen(false);
    const newBook: IBook = {
      ...data,
      available: true, // Default value for available
    };
    createBook(newBook)
      .unwrap()
      .then((response) => {
        console.log("Book added successfully:", response);
        toast.success("Book added successfully!");
        refetch(); // Refetch the book list to update the UI
        navigate("/books"); // Navigate to the books page after adding
      })
      .catch((error) => {
        console.error("Failed to add book:", error);
        toast.error("Failed to add book. Please try again.");
      });
    reset();
  };

  return (
    <div className="mt-10 h-screen">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
        <p className="text-gray-600 mb-6">
          Fill the form below to add a new book to the library.
        </p>
      </div>
      <div className="flex justify-center items-center w-full">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Add New Book</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] scroll-behavior: smooth max-h-screen overflow-y-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <DialogHeader className="text-center mb-4">
                <DialogTitle>Add Book</DialogTitle>
                <DialogDescription>
                  Please provide all required information to add a new book to
                  the library.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4">
                {/* Title */}
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    {...addBook("title", { required: "Title is required" })}
                  />
                  {errors.title && (
                    <p className="text-sm text-red-500">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                {/* Author */}
                <div className="grid gap-2">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    {...addBook("author", { required: "Author is required" })}
                  />
                  {errors.author && (
                    <p className="text-sm text-red-500">
                      {errors.author.message}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    {...addBook("description", {
                      required: "Description is required",
                    })}
                  />
                  {errors.description && (
                    <p className="text-sm text-red-500">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                {/* Image URL */}
                <div className="grid gap-2">
                  <Label htmlFor="image">Image Url</Label>
                  <Input
                    id="image"
                    type="url"
                    {...addBook("image", { required: "Image URL is required" })}
                  />
                  {errors.image && (
                    <p className="text-sm text-red-500">
                      {errors.image.message}
                    </p>
                  )}
                </div>

                {/* ISBN */}
                <div className="grid gap-2">
                  <Label htmlFor="isbn">ISBN</Label>
                  <Input
                    id="isbn"
                    {...addBook("isbn", { required: "ISBN is required" })}
                  />
                  {errors.isbn && (
                    <p className="text-sm text-red-500">
                      {errors.isbn.message}
                    </p>
                  )}
                </div>

                {/* Genre Select */}
                <div className="grid gap-2">
                  <Label htmlFor="genre">Genre</Label>
                  <Controller
                    name="genre"
                    control={control}
                    rules={{ required: "Genre is required" }}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a genre" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Genre</SelectLabel>
                            <SelectItem value="FICTION">FICTION</SelectItem>
                            <SelectItem value="NON_FICTION">
                              NON_FICTION
                            </SelectItem>
                            <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                            <SelectItem value="HISTORY">HISTORY</SelectItem>
                            <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                            <SelectItem value="FANTASY">FANTASY</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.genre && (
                    <p className="text-sm text-red-500">
                      {errors.genre.message}
                    </p>
                  )}
                </div>

                {/* Copies */}
                <div className="grid gap-2">
                  <Label htmlFor="copies">Copies</Label>
                  <Input
                    id="copies"
                    type="number"
                    {...addBook("copies", {
                      required: "Copies number is required",
                      valueAsNumber: true,
                    })}
                  />
                  {errors.copies && (
                    <p className="text-sm text-red-500">
                      {errors.copies.message}
                    </p>
                  )}
                </div>
              </div>

              <DialogFooter className="pt-4">
                <DialogClose asChild>
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Add</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
