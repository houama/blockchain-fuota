import React, { useState } from "react";
import useStore from "../Store/store";
import Navbar from "../Home/components/navbar.component";
import Sidebar from "../Home/components/sidebar.component";
import { useDropzone } from "react-dropzone";

export default function Firmware() {
  const [firmwareData, setFirmwareData] = useState({ cid: "", file: "" });

  const registerFirmware = useStore((state) => state.registerFirmware);

  const handleChange = (e) => {
    setFirmwareData({ ...firmwareData, cid: e.target.value });
  };

  const handleRegisterFirmware = () => {
    registerFirmware(firmwareData.cid);
  };

  const onDrop = (acceptedFiles) => {
    if (!isDragReject) {
      const uploadedFile = acceptedFiles[0];

      setFirmwareData({ ...firmwareData, file: uploadedFile });
    }
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    isDragAccept,
  } = useDropzone({
    onDrop,
    accept: ["image/png"],
  });

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
            <h1 className="text-2xl font-bold text-white">Firmware Menu</h1>
          </div>

          <div className="flex text-white text-sm font-semibold text-left mb-5">
            Upload new firmware update here
          </div>

          <label
            for="device_id"
            className="block mb-2 text-sm text-left font-bold dark:text-white"
          >
            Firmware file
          </label>

          <div
            className={
              isDragReject
                ? "flex bg-gray-400 rounded-lg flex-col justify-center items-center p-3 w-44 h-36 border-2 border-red-400 border-dashed cursor-pointer"
                : isDragAccept
                ? "flex bg-gray-400 rounded-lg flex-col justify-center items-center p-3 w-44 h-36 border-2 border-green-400 border-dashed cursor-pointer"
                : "flex bg-gray-400 rounded-lg flex-col justify-center items-center p-3 w-44 h-36 border-2 border-white border-dashed cursor-pointer"
            }
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {firmwareData.file ? (
              <p className="text-xs text-center font-semibold text-green-800">
                File uploaded successfully!
              </p>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="3em"
                  height="3em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  className="dark:text-white"
                >
                  <path
                    fill="currentColor"
                    d="M18.944 11.112C18.507 7.67 15.56 5 12 5C9.244 5 6.85 6.611 5.757 9.15C3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5h11c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888zM13 14v3h-2v-3H8l4-5l4 5h-3z"
                  />
                </svg>
                {isDragActive ? (
                  <p className="text-xs font-bold text-center text-red-700">
                    Drop the file here...
                  </p>
                ) : (
                  <p className="text-xs font-bold text-center text-red-700">
                    Click to choose or drag the file here
                  </p>
                )}
              </>
            )}
          </div>
          <p className="m-1 text-xs text-left text-white">
            *only support .bin format
          </p>
          {isDragReject ? (
            <div className="flex items-center text-red text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                className="mr-1 text-md"
              >
                <path
                  fill="currentColor"
                  d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8Z"
                />
                <circle cx="12" cy="16" r="1" fill="currentColor" />
                <path
                  fill="currentColor"
                  d="M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Z"
                />
              </svg>
              Unsupported format
            </div>
          ) : null}

          <button
            className="flex justify-center items-center text-green-700 border-2 border-green-900 mt-4 bg-green-400 hover:bg-green-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center "
            onClick={() => handleRegisterFirmware()}
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
