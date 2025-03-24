import { useState } from "react";

const ItemAdder = () => {
  const [inputValue, setInputValue] = useState("");  // State for input field
  const [items, setItems] = useState([]);  // State for storing the added items

  // Handle adding items to the list
  const handleAddItem = () => {
    if (inputValue.trim() && !items.includes(inputValue)) {
      setItems((prevItems) => [...prevItems, inputValue]);
      setInputValue("");  // Clear input after adding
    }
  };

  // Handle deleting an item from the list
  const handleDeleteItem = (item) => {
    setItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  return (
    <div className="p-4">
      {/* Input Field */}
      <div className="mb-4">
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add an item"
        />
        <button
          className="btn btn-primary mt-2"
          onClick={handleAddItem}
        >
          Add Item
        </button>
      </div>

      {/* Display added items with delete option */}
      <div className="space-y-2">
        {items.length > 0 ? (
          <div>
            <h3 className="text-xl font-semibold mb-2">Added Items:</h3>
            <ul className="list-disc pl-6">
              {items.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">{item}</span>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteItem(item)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No items added yet.</p>
        )}
      </div>

      {/* Text area to show the items as a string */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Current Items in Array:</h3>
        <textarea
          className="textarea textarea-bordered w-full mt-2"
          rows="4"
          value={items.join(", ")}
          readOnly
        />
      </div>
    </div>
  );
};

export default ItemAdder;
