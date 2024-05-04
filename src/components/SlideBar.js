import React from "react";

const categories = [
  "Antiques & Collectibles",
  "Electronics",
  "Decorations",
  "Furniture",
  "Vehicles",
  "Real Estate",
  "Fashion",
  "Jewellery",
];

export default function SlideBar() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white to-emerald-100 pt-10 ">
      <HeadingWithSvg heading={"Categories"} />
      <h2 className="text-zinc-500 mt-5">
        Explore around with your preferences
      </h2>
      <div className="grid grid-cols-4 justify-around  items-center gap-10 mt-36 pb-48 w-[80%]">
        {categories.map((cat) => {
          return (
            <Category
              key={cat}
              name={cat}
              letter={cat.charAt(0) + cat.charAt(1)}
            />
          );
        })}
      </div>
    </div>
  );
}

function Category({ name, letter }) {
  return (
    <div className="relative hover:scale-110 transition-all duration-500">
      <div
        className={`bg-slate-200 z-0 text-white bg-image-${letter} rounded-tl-3xl rounded-br-3xl p-10 box-content min-w-20 min-h-8 h-24 flex justify-center `}
      ></div>
      <div className="z-10 absolute top-0 bg-slate-900 opacity-30 min-w-full min-h-full rounded-tl-3xl rounded-br-3xl"></div>
      <p className="z-20 text-xl flex items-center justify-center text-white opacity-100 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        {name}
      </p>
    </div>
  );
}

export function HeadingWithSvg({ heading }) {
  return (
    <div className="flex items-center space-x-2">
      <svg
        width="70"
        height="19"
        viewBox="0 0 43 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="36.7573"
          y="12"
          width="8.14204"
          height="8.14204"
          transform="rotate(-135 36.7573 12)"
          fill="#029E7C"
        />
        <rect
          x="35"
          y="7.24268"
          width="35"
          height="2"
          rx="1"
          transform="rotate(-180 35 7.24268)"
          fill="#029E7C"
        />
      </svg>
      <h1 className="text-7xl">{heading}</h1>

      <svg
        width="70"
        height="19"
        viewBox="0 0 43 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6.24268"
          width="8.14204"
          height="8.14204"
          transform="rotate(45 6.24268 0)"
          fill="#029E7C"
        />
        <rect x="8" y="4.75732" width="35" height="2" rx="1" fill="#029E7C" />
      </svg>
    </div>
  );
}
