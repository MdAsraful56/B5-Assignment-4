const BookCard = () => {
  const books = [
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      genre: "FICTION",
      isbn: "9781250301697",
      description:
        "A psychological thriller about a woman's act of violence and the therapist obsessed with uncovering her motive.",
      copies: 5,
      available: true,
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      genre: "HISTORY",
      isbn: "9780062316097",
      description:
        "Explores the evolution of Homo sapiens from the Stone Age to the modern age.",
      copies: 2,
      available: true,
    },
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      genre: "SCIENCE",
      isbn: "9780553380163",
      description:
        "An overview of cosmology from the Big Bang to black holes, aimed at non-scientific readers.",
      copies: 0,
      available: false,
    },
    {
      title: "Educated",
      author: "Tara Westover",
      genre: "BIOGRAPHY",
      isbn: "9780399590504",
      description:
        "A memoir of a girl who was kept out of school and escapes her survivalist family to earn a PhD.",
      copies: 3,
      available: true,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      genre: "NON_FICTION",
      isbn: "9780735211292",
      description:
        "An easy & proven way to build good habits and break bad ones.",
      copies: 4,
      available: true,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "FANTASY",
      isbn: "9780547928227",
      description:
        "A fantasy adventure following Bilbo Baggins on a journey to win a share of treasure guarded by a dragon.",
      copies: 0,
      available: false,
    },
    {
      title: "The Immortal Life of Henrietta Lacks",
      author: "Rebecca Skloot",
      genre: "NON_FICTION",
      isbn: "9781400052189",
      description:
        "The story of the woman whose cells changed medical research forever.",
      copies: 2,
      available: true,
    },
    {
      title: "The Martian",
      author: "Andy Weir",
      genre: "SCIENCE",
      isbn: "9780804139021",
      description: "An astronaut stranded on Mars fights for survival.",
      copies: 6,
      available: true,
    },
    {
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      genre: "BIOGRAPHY",
      isbn: "9780553296983",
      description: "The writings of a Jewish girl hiding during WWII.",
      copies: 1,
      available: true,
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "FICTION",
      isbn: "9780451524935",
      description:
        "A dystopian novel exploring totalitarianism and surveillance.",
      copies: 0,
      available: false,
    },
  ];

  console.log(books);

  return (
    <div className="p-6">
      <h1 className="text-2xl text-center mb-4">Book List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://m.media-amazon.com/images/I/81ANaVZk5LL._SL1500_.jpg"
              alt="book image"
              width={200}
              height={180}
              className="items-center justify-center mx-auto mb-4 rounded"
            />
            <h2 className="text-xl font-semibold text-red-700">{book.title}</h2>
            <p className="text-gray-700">Author: {book.author}</p>
            <p className="text-gray-600">Genre: {book.genre}</p>
            <p className="text-gray-600">ISBN: {book.isbn}</p>
            <p className="text-gray-500">{book.description}</p>
            <p
              className={`mt-2 ${
                book.available ? "text-green-600" : "text-red-600"
              }`}
            >
              {book.available ? "Available" : "Not Available"}
            </p>
            <p className="mt-1">Copies: {book.copies}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
