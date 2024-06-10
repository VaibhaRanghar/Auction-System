import {
  addDoc,
  collection,
  getDocsFromServer,
  query,
  where,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { ItemsContext } from "../context/ItemsContext";
const MoneyInput = ({ placeholderValue, productId }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(
    JSON.parse(localStorage.getItem(`submitted_${productId}`)) || false
  );
  const item = useContext(ItemsContext).items.find((element) => {
    return element.id === productId;
  });
  const { setDataUpdated } = useContext(ItemsContext);
  const bidsRef = collection(db, "bids");

  useEffect(() => {
    async function fetchLatestBid() {
      const q = query(bidsRef, where("product", "==", productId));

      try {
        const querySnapshot = await getDocsFromServer(q);
        console.log(querySnapshot);
        if (!querySnapshot.empty) {
          const latestBidDoc = querySnapshot.docs[0];
          const latestBid = latestBidDoc.data();
          console.log("Latest bid:", latestBid);
          setHasSubmitted(latestBid.userId === auth.currentUser.uid);
        } else {
          console.log("No bids found for this product.");
        }
      } catch (error) {
        console.error("Error fetching latest bid:", error);
      }
    }
    fetchLatestBid();
  }, [productId, bidsRef, hasSubmitted]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (parseFloat(value) <= placeholderValue) {
      setError(`Value must be greater than ${placeholderValue}`);
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem(`submitted_${productId}`, true);
    if (
      !error &&
      inputValue !== "" &&
      parseFloat(inputValue) > placeholderValue
    ) {
      setHasSubmitted(true);
      await addDoc(bidsRef, {
        bidAmount: inputValue,
        userId: auth.currentUser.uid,
        product: productId,
      });
    } else {
      alert("Please enter a valid amount greater than the placeholder value.");
    }

    const updatedItem = { ...item, starting_bid: parseFloat(inputValue) };
    console.log(updatedItem);
    try {
      const response = await fetch(`http://localhost:1000/data/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });
      setDataUpdated(true);
      if (response.ok) {
        alert("Bid updated successfully!");
      } else {
        console.error("Failed to update bid");
      }
    } catch (error) {
      console.error("Error updating bid:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {hasSubmitted ? (
        <WaitingForNextBid />
      ) : (
        <div className="mt-5 flex flex-col gap-3 justify-self-end">
          <h2 className="text-xl font-bold">Bid Now:</h2>

          <input
            className="p-2 border-black border-2 rounded-lg"
            type="number"
            value={inputValue}
            onChange={handleChange}
            placeholder={`Greater than ${placeholderValue}`}
          />
          {error && <div style={{ color: "red" }}>{error}</div>}
          <button className="p-3 justify-self-end rounded-lg text-white text-lg font-bold bg-emerald-600">
            Place Bid
          </button>
        </div>
      )}
    </form>
  );
};

function WaitingForNextBid({ placedBid }) {
  return (
    <div>
      <p>Your bid is placed.{placedBid}</p>
      <p>Waiting for next bid to be placed...</p>
    </div>
  );
}
export default MoneyInput;
