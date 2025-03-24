import React, { useEffect, useState, useContext } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../providers/AuthProvider";

const SeeStudentList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosPublic.get("/book"); // API endpoint for fetching books
        setBooks(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch book data");
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleBuyBook = (book) => {
    if (!user?.email) {
      console.error("User is not authenticated");
      return;
    }

    const paymentData = {
      email: user.email,
      bookId: book._id,
      price: book.price,
      title: book.bookTitle,
    };

    axiosPublic
      .post("/sslCommerce", { data: paymentData })
      .then((res) => {
        console.log(res.data);
        if (res.data?.paymentUrl) {
          window.open(res.data.paymentUrl, "_blank");
        }
      })
      .catch((err) => console.error("Payment error:", err));
  };

  // Filter books based on search input
  const filteredBooks = books.filter(
    (book) =>
      book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Book List</h1>

      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by book title or category..."
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
              <figure>
                <img src={book.bookImage} alt={book.bookTitle} className="h-48 w-full object-cover" />
              </figure>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{book.bookTitle}</h2>
                <p className="text-sm text-gray-600 mt-2">{book.bookShortDescription}</p>
                <p className="text-sm">
                  <span className="font-semibold">Price:</span> {book.price}tk
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Category:</span> {book.category}
                </p>
                <button
                  className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                  onClick={() => handleBuyBook(book)}
                >
                  Buy Now
                </button>
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

export default SeeStudentList;
