import { useCreateBookMutation, useGetAllBookQuery } from "@/redux/api/books";
import { type Key } from "react";

const Home = () => {
  const { data } = useGetAllBookQuery(undefined);
  const [createBook, { data: createData }] = useCreateBookMutation();

  console.log(data);
  console.log(createData);

  return (
    <div>
      <h1 className="text-2xl text-center">Home components</h1>

      <div className="">
        {data?.map(
          (book: {
            id: Key | null | undefined;
            title: string | undefined;
            url: string | undefined;
          }) => {
            return (
              <div key={book.id} className="p-4 border-b">
                <h2 className="text-xl font-bold">{book.title}</h2>
                <img src={book.url} className="w-full h-auto" />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Home;
