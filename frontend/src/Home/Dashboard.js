import React, { useState } from "react";
import useStore from "../Store/store";
import Navbar from "./components/navbar.component";
import Sidebar from "./components/sidebar.component";

export default function Dashboard() {
  const [deviceData, setDeviceData] = useState({ device_id: "" });

  const registerDevice = useStore((state) => state.registerDevice);

  const handleChange = (e) => {
    setDeviceData({ ...deviceData, device_id: e.target.value });
  };

  const handleRegisterDevice = () => {
    registerDevice(deviceData.device_id);
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />

        <div className="m-10 w-80">
          <div className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="3em"
              height="3em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              className="text-white mr-4"
            >
              <path
                fill="currentColor"
                d="M14 9h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm-1 4h-2v-2h2Zm8 0a1 1 0 0 0 0-2h-2V9h2a1 1 0 0 0 0-2h-2.18A3 3 0 0 0 17 5.18V3a1 1 0 0 0-2 0v2h-2V3a1 1 0 0 0-2 0v2H9V3a1 1 0 0 0-2 0v2.18A3 3 0 0 0 5.18 7H3a1 1 0 0 0 0 2h2v2H3a1 1 0 0 0 0 2h2v2H3a1 1 0 0 0 0 2h2.18A3 3 0 0 0 7 18.82V21a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2.18A3 3 0 0 0 18.82 17H21a1 1 0 0 0 0-2h-2v-2Zm-4 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Z"
              />
            </svg>
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          </div>

          <div className="flex text-white text-sm font-semibold text-left mb-5">
            Register device identifier to blockchain network
          </div>

          <label
            for="device_id"
            className="block mb-2 text-sm text-left font-bold dark:text-white"
          >
            Device Identifier
          </label>
          <input
            type="text"
            name="device_id"
            id="device_id"
            className="bg-input-field border-b-2  text-sm  focus:border-blue-400 block w-full p-2.5 mb-4 dark:bg-slate-300  dark:border-blue-400 dark:placeholder-gray-400 dark:focus:border-blue-400 dark:text-black"
            placeholder="ID"
            required=""
            value={deviceData.device_id}
            onChange={handleChange}
          />

          <button
            className="flex justify-center items-center text-green-700 border-2 border-green-900 mt-4 bg-green-400 hover:bg-green-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center "
            onClick={() => handleRegisterDevice()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 20 20"
              className="text-lg font-extrabold mr-4"
            >
              <path
                fill="currentColor"
                d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5v2H5v14h14v-5h2z"
              />
              <path fill="currentColor" d="M21 7h-4V3h-2v4h-4v2h4v4h2V9h4z" />
            </svg>
            Register
          </button>
        </div>
      </div>
    </>
  );
}
