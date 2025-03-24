import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const FreeBook = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchFreeBooks = async () => {
      try {
        const response = await axiosPublic.get("/freeBook"); // API endpoint for fetching free books
        setBooks(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch free book data");
        setLoading(false);
      }
    };

    fetchFreeBooks();
  }, []);

  // Filter books based on search input
  const filteredBooks = books.filter((book) =>
    book.book_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Free Book List</h1>

      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by book name or category..."
          className="border border-gray-300 p-2 rounded-lg w-full sm:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Book List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book._id} className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img 
                src={book.image} 
                alt={book.book_name} 
                className="h-56 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{book.book_name}</h2>
                <p className="text-sm text-gray-600 mt-2">{book.details}</p>
                <p className="text-sm">
                  <span className="font-semibold">Category:</span> {book.category}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Service Charge:</span> {book.service_charge}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Price:</span> {book.price}
                </p>
                {/* <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                  Download
                </button> */}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No books found</p>
        )}
      </div>
    </div>
  );
};

export default FreeBook;
