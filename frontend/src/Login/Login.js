import React, { useEffect } from "react";
import { connectBlockchainNetwork } from "../utils/interact.util";
import { useNavigate } from "react-router-dom";
import { initIpfs } from "../utils/ipfs.util";

export default function Login() {
  let navigate = useNavigate();

  const connectAccount = () => {
    connectBlockchainNetwork();
    navigate("/dashboard");
  };

  // useEffect(() => {
  //   initIpfs();
  // }, []);

  return (
    <>
      <div
        className="fixed inset-0 bg-blue-400 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="h-screen flex items-center justify-center">
        <button
          type="button"
          className="text-white relative bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => connectAccount()}
        >
          Login to your account via Metamask
        </button>
      </div>
    </>
  );
}
