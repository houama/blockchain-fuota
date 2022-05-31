import * as IPFS from "ipfs-core";
import axios from "axios";
import fs from "fs";
import swarmKeyFile from "../Artifacts/ipfs/swarm.key";

const initIpfs = async () => {
  try {
    const swarmKey = await fs.readFile(swarmKeyFile);

    // const ipfsConfig = {
    //   repo: `./ipfs`,
    //   EXPERIMENTAL: {
    //     pubsub: true,
    //   },
    //   config: {
    //     Bootstrap: [],
    //     Addresses: {
    //       Swarm: ["/ip4/0.0.0.0/tcp/4002", "/ip4/127.0.0.1/tcp/4003/ws"],
    //     },
    //   },
    //   libp2p: {
    //     modules: {
    //       connProtector: new Protector (swarmKey),
    //     },
    //   },
    // };

    const ipfs = await IPFS.create();

    console.log("init ipfs");
    console.log(process.env.REACT_APP_IPFS_BOOTSTRAP);
    await ipfs.bootstrap.clear();
    await ipfs.bootstrap.add(process.env.REACT_APP_IPFS_BOOTSTRAP);
    const res = await ipfs.bootstrap.list();

    console.log(res.Peers);

    const peerInfos = await ipfs.swarm.addrs();

    peerInfos.forEach((info) => {
      console.log(info.id);
      /*
  QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt
  */

      info.addrs.forEach((addr) => console.log(addr.toString()));
      /*
  /ip4/147.75.94.115/udp/4001/quic
  /ip6/2604:1380:3000:1f00::1/udp/4001/quic
  /dnsaddr/bootstrap.libp2p.io
  /ip6/2604:1380:3000:1f00::1/tcp/4001
  /ip4/147.75.94.115/tcp/4001
  */
    });
  } catch (err) {
    console.log(err);
  }
};

// const addToIpfs = async (file) => {
//   try {
//     const { cid } = await ipfs.add(file);

//     console.log(cid);

//     return cid;
//   } catch (err) {
//     alert(err);
//   }
// };

// const getFromIpfs = async (cid) => {
//   try {
//     const res = await axios.get(cid);
//     console.log(res.data);

//     return res.data;
//   } catch (err) {
//     alert(err);
//   }
// };

export { initIpfs };
