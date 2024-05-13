import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Timer from "../components/Timer";

const categories = [
  "Antiques & Collectibles",
  "Electronics",
  "Art and Decoration",
  "Furniture and Home Decoration",
  "Vehicles",
  "Real Estate",
  "Fashion",
  "Jewellery",
];

export default function Items() {
  const [items, setItems] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilters] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:1000/data");
      const data = await res.json();
      setItems(data);
      console.log(data);
    };
    fetchData();
  }, []);

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };
  const handleCategoriesSelect = (cat) => {
    setFilters([
      ...filter.filter((c) => {
        return c !== cat;
      }),
      cat,
    ]);
  };
  const handleFilterRemove = (f) => {
    setFilters([
      ...filter.filter((remove) => {
        return remove !== f;
      }),
    ]);
  };
  return (
    <div>
      {/* <Timer /> */}
      <div>
        <div
          className=" pl-2 pt-2 m-2 w-max flex text-xl rounded-full shadow-lg shadow-slate-200 cursor-pointer"
          onClick={handleFilterClick}
        >
          <p>Filters </p>
          <FaFilter className="m-2" />
        </div>
        {showFilter ? (
          <div className="bg-slate-50 shadow-lg shadow-slate-600 w-max rounded-xl absolute z-10">
            {categories.map((cat) => {
              return (
                <p
                  key={cat}
                  className={`cursor-pointer hover:bg-slate-200 p-2 border-b-2 rounded-xl border-slate-900  `}
                  onClick={() => {
                    handleCategoriesSelect(cat);
                    handleFilterClick();
                  }}
                >
                  {cat}
                </p>
              );
            })}
          </div>
        ) : (
          <div className="flex  gap-2">
            {filter.map((f) => {
              return (
                <span
                  key={f}
                  className="bg-emerald-300 rounded-full w-max flex items-center gap-2 pl-2 pr-2"
                >
                  {f}{" "}
                  <RxCross2
                    onClick={() => {
                      handleFilterRemove(f);
                    }}
                  />
                </span>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex flex-col ">
        {items.map((item) => {
          return (
            <>
              {filter.length === 0 ? (
                <ItemCard
                  key={item.id}
                  name={item.name}
                  image={item.image_urls}
                  description={item.description}
                  price={item.starting_bid}
                  startingTime={item.auction_start_time}
                  endingTime={item.auction_end_time}
                />
              ) : filter.includes(item.category) ? (
                <ItemCard
                  key={item.id}
                  name={item.name}
                  image={item.image_urls}
                  description={item.description}
                  price={item.starting_bid}
                  startingTime={item.auction_start_time}
                  endingTime={item.auction_end_time}
                />
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

function ItemCard({
  name,
  image,
  description,
  price,
  startingTime,
  endingTime,
}) {
  return (
    <div className="flex justify-start m-5 p-3 rounded-lg shadow-xl hover:shadow-slate-300 border-t-2 ">
      <img
        src={image}
        alt="items"
        className=" aspect-square object-contain min-w-96 max-w-96"
      />
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
            type="number"
            className="p-2 border-black border-2 rounded-lg"
          />
          <button className="p-3 justify-self-end rounded-lg text-white text-lg font-bold bg-emerald-600">
            Place Bid
          </button>
        </div>
        <span className="text-3xl text-slate-400">
          Time Remaining<br></br>
          <span className=" font-bold text-3xl text-emerald-600">
            {<Timer time={endingTime} />}
          </span>
        </span>
      </div>
    </div>
  );
}


