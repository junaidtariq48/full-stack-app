import React, { useState } from "react";

interface Item {
  name: string;
  quantity: number;
}

interface ItemFormProps {
  onAddItem: (item: Item) => void;
  handleChecked: () => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ onAddItem, handleChecked }) => {
  const [newItem, setNewItem] = useState("");
  const [newItemQty, setNewItemQty] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    setIsDisabled(true);
    e.preventDefault();

    const item: Item = {
      name: newItem,
      quantity: newItemQty,
    };
    onAddItem(item);
    setNewItem("");
    setNewItemQty(0);
    setIsDisabled(false);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="px-4 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Product Name*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Product Name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="quantity"
          >
            Product Quantity*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="quantity"
            type="number"
            min="0"
            value={newItemQty}
            onChange={(e) => setNewItemQty(parseInt(e.target.value))}
            placeholder="Product Name"
            required
          />
        </div>
        <div className="flex items-center justify-end gap-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isDisabled}
          >
            Save
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => handleChecked()}
          >
            Close
          </button>
        </div>
        {/* <label>
          Item Name:
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </label>
        <label>
          Item Quantity:
          <input
            type="number"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </label>
        <button type="submit">Add Item</button> */}
      </form>
    </div>
  );
};

export default ItemForm;
