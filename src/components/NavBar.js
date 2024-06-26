import React from "react";
import { useAuth } from "../context";
import { doSignOut } from "../auth";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  return (
    <div className="bg-slate-800 text-white flex justify-between ">
      <div className="pl-4">
        <a className="p-2 flex items-center gap-3" href="/">
          <img src="./logo-trans.png" alt="logo" className="w-[60px]" />
          <h1 className="text-2xl text-orange-600">BidsEra</h1>
        </a>
      </div>
      <div className=" flex justify-center items-center ">
        <div className="p-7 hover:bg-emerald-700">
          <a className="p-5 text-xl" href="/">
            Home
          </a>
        </div>

        <div className="p-7 hover:bg-emerald-700">
          <a className="p-5 text-xl" href="/blogs">
            Blogs
          </a>
        </div>

        <div className="p-7 hover:bg-emerald-700">
          <a className="p-5 text-xl" href="/contact">
            Contact
          </a>
        </div>

        <div className="p-7 hover:bg-emerald-700">
          {userLoggedIn ? (
            <>
              <button
                className="text-xl"
                onClick={() => {
                  doSignOut();
                }}
              >
                Logout
              </button>
            </>
          ) : (
            navigate("/login")
          )}
        </div>
      </div>
    </div>
  );
}
