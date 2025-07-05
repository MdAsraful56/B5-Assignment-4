import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetAllBookQuery } from "@/redux/api/books";
import type { IBook } from "@/typescript/Types";
import BookCard from "../../components/BookCard";

const AllBooks = () => {
  const { data, isLoading } = useGetAllBookQuery(undefined);
  if (isLoading) {
    return <div className="text-center my-3">Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div className="text-center my-3">No books available.</div>;
  }

  // console.log(data?.data);

  const books = data?.data;

  return (
    <div>
      <div className="text-center mt-5">
        <h1 className="text-2xl">Welcome to All Books Components</h1>
        <p>List of all books will be displayed here.</p>
      </div>
      <div className="py-12 lg:py-16 mx-6">
        <div className="items-center justify-center">
          <Tabs
            defaultValue="all"
            className="w-full items-center justify-center"
          >
            <TabsList className="w-full flex flex-wrap gap-2 justify-center sm:justify-start">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="fiction">FICTION</TabsTrigger>
              <TabsTrigger value="non-fiction">NON-FICTION</TabsTrigger>
              <TabsTrigger value="science">SCIENCE</TabsTrigger>
              <TabsTrigger value="history">HISTORY</TabsTrigger>
              <TabsTrigger value="biography">BIOGRAPHY</TabsTrigger>
              <TabsTrigger value="fantasy">FANTASY</TabsTrigger>
            </TabsList>
            <div className="shadow p-3 sm:p-4 md:mt-6 mt-10 rounded-lg">
              <TabsContent value="all" className="">
                <div className=" max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {books.map((book: IBook, index: number) => (
                    <BookCard key={index} book={book} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="fiction">
                <div className=" max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {books
                    .filter((book: IBook) => book.genre === "FICTION")
                    .map((book: IBook, index: number) => (
                      <BookCard key={index} book={book} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="non-fiction">
                <div className=" max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {books
                    .filter((book: IBook) => book.genre === "NON_FICTION")
                    .map((book: IBook, index: number) => (
                      <BookCard key={index} book={book} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="science">
                <div className=" max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {books
                    .filter((book: IBook) => book.genre === "SCIENCE")
                    .map((book: IBook, index: number) => (
                      <BookCard key={index} book={book} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="history">
                <div className=" max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {books
                    .filter((book: IBook) => book.genre === "HISTORY")
                    .map((book: IBook, index: number) => (
                      <BookCard key={index} book={book} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="biography">
                <div className=" max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {books
                    .filter((book: IBook) => book.genre === "BIOGRAPHY")
                    .map((book: IBook, index: number) => (
                      <BookCard key={index} book={book} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="fantasy">
                <div className=" max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {books
                    .filter((book: IBook) => book.genre === "FANTASY")
                    .map((book: IBook, index: number) => (
                      <BookCard key={index} book={book} />
                    ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
