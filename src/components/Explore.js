import React from "react";
import { useNavigate } from "react-router-dom";
export default function Explore() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center p-10">
      <button
        className="bg-emerald-600 p-5 rounded-full text-white hover:bg-emerald-800"
        onClick={() => {
          navigate("/products-list");
        }}
      >
        EXPLORE MORE
      </button>
    </div>
  );
}
