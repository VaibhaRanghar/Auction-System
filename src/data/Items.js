import React, { useEffect, useState } from "react";

export default function Items() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:1000/data");
      const data = await res.json();
      setItems(data);
    };
    fetchData();
  }, []);
  console.log(items);

  return (
    <div>
      <ItemCard
        name={items[0].name}
        image={items[0].image_urls}
        description={items[0].description}
        price={items[0].starting_bid}
        startingTime={items[0].auction_start_time}
      />
    </div>
  );
}

function ItemCard({ name, image, description, price, startingTime }) {
  return (
    <div className="flex justify-center gap-5 p-10">
      <img src={image} alt="items" className="w-1/2" />

      <div>
        <div className="p-5 flex flex-col gap-5">
          <h1 className="text-3xl font-bold ">{name}.</h1>
          <p className="text-lg ">{description}</p>
          <span className="text-xl">Bidding Price: ${price}</span>
        </div>
        <div className="p-5 flex flex-col gap-3 justify-self-end">
          <h2 className="text-xl font-bold">Bid Now</h2>
          <p className="text-slate-500">Bid Amount: Minimum Bid $ {price}</p>
          <input
            placeholder="$00.00"
            className="p-2 border-black border-2 rounded-lg"
          />
          <button className="p-3 justify-self-end rounded-lg text-white text-lg font-bold bg-emerald-600">
            Place Bid
          </button>
        </div>
        {/* <span className="text-3xl text-slate-400">
            Time Remaining<br></br>
            <span className=" font-bold text-3xl text-emerald-600">
              {startingTime}
            </span>
          </span> */}
      </div>
    </div>
  );
}
