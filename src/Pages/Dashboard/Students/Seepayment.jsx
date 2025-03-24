import React, { useState, useEffect, useContext } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../providers/AuthProvider";

const SeePayment = () => {
  const { user } = useContext(AuthContext);
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (!user?.email) {
      setError("User is not authenticated");
      setLoading(false);
      return;
    }

    const fetchFoodData = async () => {
      try {
        const response = await axiosPublic.get(`/find-food-id?email=${user.email}`);

        if (response.data.success) {
          setFoodData(response.data.foodData);
        } else {
          setError(response.data.message || "No data found for the user.");
        }
      } catch (err) {
        setError("Failed to fetch payment status.");
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, [user]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Payment Details</h1>
      <div className="overflow-x-auto">
        {foodData.length === 0 ? (
          <p className="text-center">No payment details available for this user.</p>
        ) : (
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Payment ID</th>
                <th>Book ID</th>
                <th>Email</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {foodData.map((food) => (
                <tr key={food._id}>
                  <td>{food.paymentId}</td>
                  <td>{food.foodId}</td>
                  <td>{food.email}</td>
                  <td>${food.price}</td>
                  <td>{food.status}</td>
                  <td>
                    {food.status === "success" ? (
                      <button className="btn btn-success btn-sm">Payment Successful</button>
                    ) : (
                      <button className="btn btn-error btn-sm">Cancel Payment</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SeePayment;
