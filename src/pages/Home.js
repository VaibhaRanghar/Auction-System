import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context";

export default function Home() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    // bg-hero-pattern bg-cover bg-no-repeat relative
    <div className="flex justify-between bg-gradient-to-t from-white to-emerald-100">
      <div className="flex flex-col justify-start items-start gap-5 p-24 pt-32">
        <p className="text-emerald-600">
          <strong>Welcome To Auction House</strong>
        </p>
        <h1 className="text-6xl">
          Build, Sell & Collect <br /> Digital items.
        </h1>
        <p>
          Find hidden gems & unique treasures at unbeatable prices. Bid, win,
          <br />
          and discover something amazing today!
        </p>
        <button
          className="bg-emerald-700 p-5 rounded-full text-white hover:bg-emerald-800"
          onClick={() => {
            navigate("/products-list");
          }}
        >
          START EXPLORING
        </button>
      </div>
      <div>
        <img
          src="./hero-image.jpg"
          alt="hero_image"
          className="w-[26rem] m-10"
        />
      </div>
    </div>
  );
}
