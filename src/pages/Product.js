import React, { useContext, useEffect, useState } from "react";
import { ItemsContext } from "../context/ItemsContext.js";
import { useLocation } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts.js";

export default function Product() {
  //code b/w these cmts if for finding id of the product which is clicked from items list.
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("id");
  //use this product id to make a profile for product and show details of product and selling of product takes place here.
  const [element, setElement] = useState({});
  const item = useContext(ItemsContext).items.find((element) => {
    return element.id === productId;
  });
  useEffect(() => {
    setElement((prevItem) => ({ ...prevItem, ...item }));
  }, [item, setElement]);

  return (
    <div>
      <div className="flex justify-center items-center" id="productSection">
        <div className="flex shadow-lg border m-10  rounded-xl p-10 gap-10  ">
          <img
            src={element.image_urls}
            alt="nothing"
            className="max-w-96 max-h-96"
          />
          <div className="text-lg flex flex-col items-start">
            <h2 className="font-bold text-2xl">{element?.name}</h2>
            <p>{element.description}</p>
            <h2 className="font-bold mt-5 text-2xl">Details:</h2>
            <p>{element.details}</p>
            <p className="text-slate-500 text-lg mt-5">
              Bid Amount: Minimum Bid ${element?.starting_bid}
            </p>
            <div className="mt-5 flex flex-col gap-3 justify-self-end">
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
          </div>
        </div>
      </div>
      <RelatedProducts category={element.category} id={element.id} />
    </div>
  );
}
