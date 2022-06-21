import React, { useEffect, useState } from "react";
import { map } from "lodash";
import moment from "moment";

const FirmwareTable = ({ data }) => {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div className="relative overflow-x-auto mt-5 mb-10 shadow-lg  sm:rounded-lg">
      <table className="w-full table-auto text-sm text-left bg-white">
        <thead className="text-md bg-gray-400 border-b-2 border-blue-700">
          <tr>
            <th className="px-5 py-4">Publisher</th>
            <th className="px-5 py-4">Version</th>
            <th className="px-5 py-4">CID</th>
            <th className="px-5 py-4">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 ? (
            data.map((item, index) => {
              return (
                <tr className="bg-white hover:bg-gray-lighter">
                  <td className="px-5 py-3">{item[0]}</td>
                  <td className="px-5 py-3">{item[1]}</td>
                  <td className="px-5 py-3">{item[2]}</td>
                  <td className="px-5 py-3">
                    {moment.unix(item[3]._hex).format("MM/DD/YYYY hh:mm A")}
                  </td>
                </tr>
              );
            })
          ) : isLoading ? (
            <tr>
              <h1 className="font-medium text-gray p-5">Loading...</h1>
            </tr>
          ) : (
            <tr>
              <h1 className="font-medium text-gray p-5">Firmware is empty</h1>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FirmwareTable;
