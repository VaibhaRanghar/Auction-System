import React from "react";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="flex justify-between pl-10 pr-10">
        <div className="pl-4 self-center">
          <a className="p-2 flex items-center gap-3" href="/">
            <img src="./logo-trans.png" alt="logo" className="w-[80px]" />
            <h1 className="text-4xl text-orange-600">BidsEra</h1>
          </a>
        </div>
        <div className="p-5 flex flex-col gap-3 items-end w-max  text-white">
          <h2 className="text-orange-600 text-2xl underline underline-offset-4 decoration-1">
            Useful Links
          </h2>
          <ul className="flex self-start flex-col gap-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full p-10 bg-black text-white flex justify-center">
        <p>
          BIDSERA Copyright © 2021 BidsEra - All rights reserved || Made By:
          Pengyuwin-Sama
        </p>
      </div>
    </div>
  );
}
