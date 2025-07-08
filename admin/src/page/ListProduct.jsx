import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const ListProduct = () => {
  const [item, setItem] = useState([]);
  

  const getitem = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/food/foodlist');
      if (res.data.data) {
        setItem(res.data.data);
      }
    } catch (err) {
      toast.error("Failed to fetch items");
    }
  };
console.log(item)
  const removeitem = async (id) => {
    try {
      const res = await axios.delete('http://localhost:4000/api/food/delete-item', {
        data: { id: id }
      });

      if (res.data.success) {
        toast.success("Item removed");
        getitem(); // refresh the list
      }
    } catch (err) {
      toast.error("Failed to remove item");
    }
  };

  useEffect(() => {
    getitem();
  }, []);

  return (
    <div className="p-4">
      <ToastContainer />

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border bg-amber-100">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Image</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {item.map((items, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{items.name}</td>
                <td className="border p-2">
                  <img src={`http://localhost:4000/images/${items.image}`} alt={items.name} className="w-16 h-16 object-cover mx-auto" />
                </td>
                <td className="border p-2">{items.category}</td>
                <td className="border p-2">৳{items.price}</td>
                <td
                  className="border p-2 text-red-600 cursor-pointer"
                  onClick={() => removeitem(items._id)}
                >
                  Remove
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card List */}
      <div className="md:hidden flex flex-col gap-4 mt-4">
        {item.map((items, index) => (
          <div key={index} className="bg-amber-100 border rounded-lg shadow-md p-4">
            <p><strong>Name:</strong> {items.name}</p>
            <p><strong>Category:</strong> {items.category}</p>
            <p><strong>Price:</strong> ৳{items.price}</p>
            <div className="my-2">
              <img src={items.image} alt={items.name} className="w-full h-40 object-cover rounded" />
            </div>
            <button
              onClick={() => removeitem(items._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
