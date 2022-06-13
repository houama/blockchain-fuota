import axios from "axios";

export const addToIpfs = async (file) => {
  try {
    const res = await axios.post(process.env.REACT_IPFS_ADDRESS, file);

    console.log(res);

    return res;
  } catch (err) {
    alert(err);
  }
};
