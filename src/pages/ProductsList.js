import React from "react";

export default function ProductsList() {
  return (
    <div>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

function Product() {
  return (
    <div className="flex">
      <img src="" alt="nothing" className="max-w-96 max-h-96" />
      <div className="text-lg flex flex-col items-start">
        <h2 className="font-bold text-2xl">Product Name</h2>
        <label>Place a Bid:</label>
        <input type="number" placeholder="$ 00.00" className="p-1" />
        <button>Enter</button>
      </div>
    </div>
  );
}
