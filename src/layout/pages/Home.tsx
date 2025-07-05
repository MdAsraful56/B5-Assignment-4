import { Button } from "@/components/ui/button";
import { useGetAllBookQuery } from "@/redux/api/books";
import type { IBook } from "@/typescript/Types";
import { Link } from "react-router";
import accordionCover from "../../assets/Cover/cover (7).jpg";
import { AccordionCard } from "../components/AccordionCard";
import { BannerCarousel } from "../components/BannerCarousel";
import BookCard from "../components/BookCard";

const Home = () => {
  const { data, isLoading } = useGetAllBookQuery(undefined);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No books available.</div>;
  }

  const books = data?.data.slice(0, 8);

  return (
    <div>
      <div className="">
        <BannerCarousel />
        <div className="">
          <h1 className="text-3xl md:text-4xl font-bold text-center mt-8">
            Welcome to Our Library
          </h1>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our vast collection of books, journals, and digital
            resources. Join us in fostering a love for reading and learning.
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <Link to={"/create-book"}>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Add New Book
            </Button>
          </Link>
        </div>
        <div className="">
          <div className="">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mt-8">
              Popular Books
            </h2>
            <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
              Discover the most popular books in our collection. From classic
              literature to modern bestsellers, find your next great read.
            </p>
          </div>
          <div className=" max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book: IBook, index: number) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
          <div className="flex items-center justify-center my-4">
            <Link to={"/books"}>
              <Button className="">Show All Book</Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-8">
          <div className="">
            <img src={accordionCover} alt="" className="" />
          </div>
          <div className="">
            <AccordionCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
