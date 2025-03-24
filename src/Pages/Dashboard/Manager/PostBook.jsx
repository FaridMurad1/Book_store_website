import React, { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const PostBook = () => {
  const axiosPublic = useAxiosPublic();
  const [bookData, setBookData] = useState({
    bookTitle: "",
    category: "",
    bookShortDescription: "",
    price: "",
    bookImage: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axiosPublic.post("/book", bookData);
      if (response.status === 201) {
        setSuccess("Book added successfully!");
        setBookData({
          bookTitle: "",
          category: "",
          bookShortDescription: "",
          price: "",
          bookImage: "",
        });
      }
    } catch (err) {
      setError("Failed to add book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Add a New Book</h1>

      {/* Success / Error Messages */}
      {success && <p className="text-green-600 text-center mb-4">{success}</p>}
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Book Title */}
        <div>
          <label className="block text-gray-700">Book Title:</label>
          <input
            type="text"
            name="bookTitle"
            value={bookData.bookTitle}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700">Category:</label>
          <input
            type="text"
            name="category"
            value={bookData.category}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700">Description:</label>
          <textarea
            name="bookShortDescription"
            value={bookData.bookShortDescription}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700">Price (tk):</label>
          <input
            type="number"
            name="price"
            value={bookData.price}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-700">Image URL:</label>
          <input
            type="text"
            name="bookImage"
            value={bookData.bookImage}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default PostBook;
