import axios from "axios";
import { create } from "ipfs-http-client";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const client = create(process.env.REACT_APP_IPFS_ADDR);

export const addToIpfs = async (file) => {
  try {
    console.log("uploading to ipfs");
    // const res = await axios.post(
    //   process.env.REACT_APP_IPFS_ADDR + "?stream-channels=true&progress=false",
    //   file
    // );
    const data = await client.add(file);

    console.log(data);
    console.log(data.cid.toString());

    return data.cid.toString();
  } catch (err) {
    alert(err);
  }
};
