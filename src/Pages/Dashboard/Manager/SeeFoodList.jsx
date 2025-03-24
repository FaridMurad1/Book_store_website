import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const SeeFoodList = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosPublic = useAxiosPublic()

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axiosPublic.get("/food");
        setFoods(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch food data");
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6 mt-10">Book List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
        {foods.map((food) => (
          <div key={food._id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="font-bold text-2xl">{food.mealType}</h2>
              <p>
                <span className="font-semibold">Items:</span>{" "}
                {food.items.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Price:</span> ${food.price}
              </p>
              <p>
                <span className="font-semibold">Enrollment Time:</span>{" "}
                {new Date(food.enrollmentTime).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeeFoodList;
