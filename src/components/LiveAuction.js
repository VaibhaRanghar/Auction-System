import React, { useContext, useEffect, useState } from "react";
import { HeadingWithSvg } from "./SlideBar";
import Timer from "./Timer";
import { ItemsContext } from "../context/ItemsContext";
import { Link } from "react-router-dom";

export default function LiveAuction() {
  const [liveAuctionItems, setLiveAuctionItems] = useState([]);

  const context = useContext(ItemsContext);

  useEffect(() => {
    const elements = context.items
      .filter((i) => {
        return isTimeRemaining(i.auction_end_time);
      })
      .slice(0, 6);

    setLiveAuctionItems((prev) => [...elements]);
  }, [setLiveAuctionItems, context]);

  return (
    <div className="flex justify-center flex-col items-center p-10">
      <HeadingWithSvg heading={"Live Auction"} />
      <p className="text-slate-400 text-lg text-center">
        Explore on the world's best & largest Bidding marketplace with our
        beautiful Bidding <br />
        products. We want to be a part of your smile, success and future growth.
      </p>

      <div className="flex justify-evenly gap-y-5 flex-wrap">
        {liveAuctionItems.map((i) => {
          return (
            <Link
              to={`/product?id=${i.id}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ItemCard
                key={i.id}
                name={i.name}
                imageSource={i.image_urls}
                biddingPrice={i.starting_bid}
                timeRemaining={i.auction_end_time}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function ItemCard({ name, imageSource, biddingPrice, timeRemaining }) {
  return (
    <div className="relative flex flex-col items-center w-96 bg-white rounded-lg shadow-xl shadow-slate-300 overflow-hidden pt-10 p-5 hover:bg-slate-100 hover:shadow-slate-500 ">
      <p className="pt-3 text-gray-700">Time Remaining</p>
      <div className="pt-3 pb-3 text-2xl text-emerald-600 font-bold">
        <Timer time={timeRemaining} />
      </div>
      <img
        className="w-full overflow-hidden h-56 object-cover rounded-tl-xl rounded-br-xl"
        src={imageSource}
        alt={name}
      />
      <div className="pt-5 flex flex-col justify-between gap-2 self-start">
        <div className="text-gray-800 font-bold text-2xl truncate">{name}</div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-base flex gap-2">
            Bidding Price:{" "}
            <strong className="text-black">${biddingPrice}</strong>
          </p>
        </div>
        <button className="mt-2 bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 w-max rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700">
          Place a Bid
        </button>
      </div>
    </div>
  );
}
function isTimeRemaining(timeString) {
  // Split the time string into hours, minutes, and seconds
  const [hours, minutes, seconds] = timeString.split(":").map(Number);

  // Get the current time
  const now = new Date();

  // Create a target date based on the provided time string
  const targetDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes,
    seconds
  );

  // Check if the target date is in the past
  return targetDate > now;
}
