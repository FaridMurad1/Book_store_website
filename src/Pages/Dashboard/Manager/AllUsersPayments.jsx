import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllPayments = () => {
  const [payments, setPayments] = useState([]);
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchAllPayments = async () => {
      try {
        const response = await axiosPublic.get("/payments");
        setPayments(response.data);
        setFilteredPayments(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch payment data.");
        setLoading(false);
      }
    };

    fetchAllPayments();
  }, []);

  // Handle search filtering
  useEffect(() => {
    const filtered = payments.filter(
      (payment) =>
        payment.email.toLowerCase().includes(search.toLowerCase()) ||
        (payment.foodId && payment.foodId.toLowerCase().includes(search.toLowerCase()))
    );
    setFilteredPayments(filtered);
  }, [search, payments]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">All Payments</h1>

      {/* Search Bar */}
      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="Search by email or book ID..."
          className="border px-4 py-2 rounded-lg w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Payment Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Payment ID</th>
              <th className="border px-4 py-2">Book ID</th>
              <th className="border px-4 py-2">User Email</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment, index) => (
              <tr key={payment._id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{payment.paymentId || "N/A"}</td>
                <td className="border px-4 py-2">{payment.foodId || "N/A"}</td>
                <td className="border px-4 py-2">{payment.email}</td>
                <td className="border px-4 py-2">{payment.price}tk</td>
                <td className="border px-4 py-2 text-green-600 font-semibold">
                  {payment.status === "success" ? "✅ Success" : "❌ Failed"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPayments;
