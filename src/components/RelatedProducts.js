import React, { useContext } from "react";
import { ItemCard } from "./LiveAuction";
import { ItemsContext } from "../context/ItemsContext";
import { Link } from "react-router-dom";

export default function RelatedProducts({ category, id }) {
  const item = useContext(ItemsContext).items.filter((i) => {
    return i.category === category && i.id !== id;
  });

  return (
    <div className="flex flex-col items-center w-full mb-5">
      <h1 className="text-2xl font-bold m-2 p-2 ">RelatedProducts:</h1>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-5 p-3">
          {item.map((i) => {
            return (
              <Link
                key={i.id}
                to={`/product?id=${i.id}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <ItemCard
                  biddingPrice={i.starting_bid}
                  imageSource={i.image_urls}
                  name={i.name}
                  timeRemaining={i.auction_end_time}
                  key={i.id}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
