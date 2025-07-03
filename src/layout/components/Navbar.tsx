import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react"; // Optional: install lucide-react for icons
import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg font-semibold">My Application</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link to="/all-books" className="hover:text-gray-300 transition">
            All Books
          </Link>
          <Link to="/create-book" className="hover:text-gray-300 transition">
            Add Book
          </Link>
          <Link to="/" className="hover:text-gray-300 transition">
            Borrow Summary
          </Link>
          <ModeToggle />
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-gray-300">
            Home
          </Link>
          <Link to="/all-books" className="block hover:text-gray-300">
            All Books
          </Link>
          <Link to="/" className="block hover:text-gray-300">
            Add Book
          </Link>
          <Link to="/" className="block hover:text-gray-300">
            Borrow Summary
          </Link>
          <ModeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
