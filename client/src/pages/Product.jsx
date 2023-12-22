import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import ItemForm from "../components/ItemForm";

function Product() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState("");

  useEffect(() => {
    // Fetch items from the API on mount
    fetchItems();
  }, []);

  const fetchItems = () => {
    setIsLoading(true);
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(true);
      });
  };

  const handleAddItem = (item) => {
    // Send a POST request to add a new item
    fetch("http://localhost:3000/items/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((data) => {
        setItems([...items, data]);
        setIsChecked("");
      });
  };

  const handleChecked = () => {
    if (isChecked === "checked") {
      setIsChecked("");
    } else {
      setIsChecked("checked");
    }
  };

  return (
    <div className="container mx-auto">
      <div className="drawer flex justify-end py-10">
        <input
          id="my-drawer"
          type="checkbox"
          class="drawer-toggle"
          checked={isChecked}
        />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="btn btn-success drawer-button text-white font-bold"
            onClick={() => handleChecked()}
          >
            Add New Product
          </label>
        </div>
        <div className="drawer-side z-10">
          <label
            for="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-gray-100 text-base-content text-x">
            <h1 className="text-xl font-bold px-4">Add Product</h1>
            <ItemForm onAddItem={handleAddItem} handleChecked={handleChecked} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-5 gap-y-10">
        {isLoading ? (
          <div>Products are loading....</div>
        ) : (
          <ItemList items={items} />
        )}
      </div>
    </div>
  );
}

export default Product;
