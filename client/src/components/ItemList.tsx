import React from "react";

interface Item {
  _id: string;
  name: string;
  quantity: number;
}
interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div className="card w-96 bg-base-100 shadow-xl" data-id={index}>
          <figure>
            <img
              src="https://placehold.co/600x400?text=ProductImage"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
