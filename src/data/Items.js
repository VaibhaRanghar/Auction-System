import React, { useEffect, useState } from "react";

export default function Items() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:1000/data");
      const data = await res.json();
      setItems(data);
      console.log(items);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col ">
      {items.map((item) => {
        return (
          <ItemCard
            key={item.name}
            name={item.name}
            image={item.image_urls}
            description={item.description}
            price={item.starting_bid}
            startingTime={item.auction_start_time}
          />
        );
      })}
    </div>
  );
}

function ItemCard({ name, image, description, price, startingTime }) {
  return (
    <div className="flex justify-start  m-5 p-3 rounded-lg shadow-xl hover:shadow-slate-300   ">
      <img
        src={image}
        alt="items"
        className=" aspect-square object-contain min-w-96 max-w-96"
      />
      {/* w-1/2 */}
      <div className="w-full">
        <div className="p-5 flex flex-col gap-5">
          <h1 className="text-3xl font-bold ">{name}.</h1>
          <p className="text-lg ">{description}</p>
          <span className="text-xl">Bidding Price: ${price}</span>
        </div>
        <div className="p-5 flex flex-col gap-3 justify-self-end">
          <p className="text-slate-500 text-lg">
            Bid Amount: Minimum Bid $ {price}
          </p>
          <h2 className="text-xl font-bold">Bid Now</h2>
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
