// <div className="grid gap-4">
//   <div className="grid gap-3">
//     <Label htmlFor="title">Title</Label>
//     <Input id="title" name="title" placeholder="Enter your book title" />
//   </div>
//   <div className="grid gap-3">
//     <Label htmlFor="author">Author</Label>
//     <Input id="author" name="author" placeholder="Enter Author Name" />
//   </div>
//   <div className="grid gap-3">
//     <Label htmlFor="description">Description</Label>
//     <Textarea
//       id="description"
//       name="description"
//       placeholder="Enter your book Description"
//     />
//   </div>
//   <div className="grid gap-3">
//     <Label htmlFor="img">Image Url</Label>
//     <Input id="img" name="img" placeholder="Enter Image Url" type="url" />
//   </div>
//   <div className="grid gap-3">
//     <Label htmlFor="isbn">ISBN</Label>
//     <Input id="isbn" name="isbn" placeholder="Enter ISBN Number" />
//   </div>
//   <div className="grid gap-3">
//     <Label htmlFor="isbn">Genre</Label>
//     <Select>
//       <SelectTrigger className="w-full">
//         <SelectValue placeholder="Select a genre " />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectLabel>Genre</SelectLabel>
//           <SelectItem value="apple">FICTION</SelectItem>
//           <SelectItem value="apple">NON_FICTION</SelectItem>
//           <SelectItem value="banana">SCIENCE</SelectItem>
//           <SelectItem value="blueberry">HISTORY</SelectItem>
//           <SelectItem value="grapes">BIOGRAPHY</SelectItem>
//           <SelectItem value="pineapple">FANTASY</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   </div>
//   <div className="grid gap-3">
//     <Label htmlFor="copies">Copies</Label>
//     <Input id="copies" name="copies" placeholder="Enter Copies Number" />
//   </div>
// </div>;

// <div className="grid gap-2">
//   <Label htmlFor="name">Name</Label>
//   <Input id="name" {...register("name", { required: "Name is required" })} />
//   {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
// </div>;
