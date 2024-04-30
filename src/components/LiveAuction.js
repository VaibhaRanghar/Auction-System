import React from "react";
import { HeadingWithSvg } from "./SlideBar";

export default function LiveAuction() {
  return (
    <div className="flex justify-center flex-col items-center p-10">
      <HeadingWithSvg heading={"Live Auction"} />
      <p className="text-slate-400 text-lg text-center">
        Explore on the world's best & largest Bidding marketplace with our
        beautiful Bidding <br />
        products. We want to be a part of your smile, success and future growth.
      </p>

      <div className="flex justify-evenly gap-y-5 flex-wrap">
        <ItemCard
          name={"Blue Ravaged Beetle"}
          imageSource={"./Vehicles.jpg"}
          biddingPrice={100}
          timeRemaining={`00H : 00M : 00S`}
        />
        <ItemCard
          name={"Headphones"}
          imageSource={"./Electronics.jpg"}
          biddingPrice={100}
          timeRemaining={`00H : 00M : 00S`}
        />
        <ItemCard
          name={"Flower Pots"}
          imageSource={"./Antiques.jpg"}
          biddingPrice={100}
          timeRemaining={`00H : 00M : 00S`}
        />
        <ItemCard
          name={"Accessories"}
          imageSource={"./Fashion.jpg"}
          biddingPrice={100}
          timeRemaining={`00H : 00M : 00S`}
        />
        <ItemCard
          name={"Customized Bulbs"}
          imageSource={"./Decorations.jpg"}
          biddingPrice={100}
          timeRemaining={`00H : 00M : 00S`}
        />
        <ItemCard
          name={"Pendents"}
          imageSource={"./Jewellery.jpg"}
          biddingPrice={100}
          timeRemaining={`00H : 00M : 00S`}
        />
      </div>
    </div>
  );
}

function ItemCard({ name, imageSource, biddingPrice, timeRemaining }) {
  return (
    <div className="relative flex flex-col items-center w-96 bg-white rounded-lg shadow-xl shadow-slate-300 overflow-hidden pt-10 p-5 hover:bg-slate-50 ">
      <p className="pt-3 text-gray-700">Time Remaining</p>
      <p className="pt-3 pb-3 text-2xl text-emerald-600 font-bold">
        {timeRemaining}
      </p>
      <img
        className="w-full overflow-hidden h-56 object-cover rounded-tl-xl rounded-br-xl"
        src={imageSource}
        alt={name}
      />
      <div className="pt-5 flex flex-col justify-between gap-2 self-start">
        <div className="text-gray-800 font-bold text-2xl truncate">{name}</div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-base flex gap-2">
            Bidding Price: <p className="text-black">${biddingPrice}</p>
          </p>
        </div>
        <button className="mt-2 bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 w-max rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700">
          Place a Bid
        </button>
      </div>
    </div>
  );
}
