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

// Title, Author, Genre, ISBN, Copies, Availability;

export function AddBook() {
  return (
    <div className="items-center justify-center">
      <div className=""></div>
      <div className="text-center mt-20">
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button variant="outline">Create A Book</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create a New Book</DialogTitle>
                <DialogDescription>
                  Fill in the details below to create a new book entry.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Enter your book title"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    name="author"
                    placeholder="Enter Author Name"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Enter your book Description"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="img">Image Url</Label>
                  <Input
                    id="img"
                    name="img"
                    placeholder="Enter Image Url"
                    type="url"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="isbn">ISBN</Label>
                  <Input
                    id="isbn"
                    name="isbn"
                    placeholder="Enter ISBN Number"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="isbn">Genre</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a genre " />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Genre</SelectLabel>
                        <SelectItem value="apple">FICTION</SelectItem>
                        <SelectItem value="apple">NON_FICTION</SelectItem>
                        <SelectItem value="banana">SCIENCE</SelectItem>
                        <SelectItem value="blueberry">HISTORY</SelectItem>
                        <SelectItem value="grapes">BIOGRAPHY</SelectItem>
                        <SelectItem value="pineapple">FANTASY</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="copies">Copies</Label>
                  <Input
                    id="copies"
                    name="copies"
                    placeholder="Enter Copies Number"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Add Book</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </div>
  );
}
