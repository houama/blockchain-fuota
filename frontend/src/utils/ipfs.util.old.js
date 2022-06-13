import * as IPFS from "ipfs-core";
import axios from "axios";
import swarmKeyFile from "../Artifacts/ipfs/swarm.key";
import { Buffer } from "buffer";
// import writeKey from "libp2p/src/pnet/key-generator";
// import privateLibp2pBundle from "./libp2p-bundle";
// import crypto from "libp2p-crypto";
import { PreSharedKeyConnectionProtector, generateKey } from "libp2p/pnet";
import { fromString as uint8ArrayFromString } from "uint8arrays/from-string";
import { toString as uint8ArrayToString } from "uint8arrays/to-string";
import { randomBytes } from "@libp2p/crypto";
// import { TCP } from "@libp2p/tcp";
import { createLibp2p } from "libp2p";
import { WebSockets } from "@libp2p/websockets";
import { WebRTCStar } from "@libp2p/webrtc-star";
import { Mplex } from "@libp2p/mplex";
import { Noise } from "@chainsafe/libp2p-noise";
import { Bootstrap } from "@libp2p/bootstrap";

// const initIpfs = async () => {
//   try {
//     const webRtcStar = new WebRTCStar();

//     const swarmKey = await fetch(swarmKeyFile).then((res) => res.text());

//     const swarmBuffer = Buffer.from(swarmKey, "utf-8");

    // Create our libp2p node
    // const libp2p = await createLibp2p({
    //   addresses: {
        // Add the signaling server address, along with our PeerId to our multiaddrs list
        // libp2p will automatically attempt to dial to the signaling server so that it can
        // receive inbound connections from other peers
      //   listen: ["/ip4/172.20.13.246/tcp/8080"],
      // },
      // transports: [new WebSockets(), webRtcStar],
      // connectionEncryption: [new Noise()],
      // streamMuxers: [new Mplex()],
      // peerDiscovery: [
      //   webRtcStar.discovery,
      //   new Bootstrap({
      //     list: [process.env.REACT_APP_IPFS_BOOTSTRAP],
      //   }),
      // ],
      // connectionProtector: new PreSharedKeyConnectionProtector({
      //   psk: swarmBuffer,
      // }),
    // });

    // {
    //     modules: {
    //       connProtector: new PreSharedKeyConnectionProtector({
    //         psk: swarmBuffer,
    //       }),
    //     },
    //     config: {
    //       peerDiscovery: {
    //         webRTCStar: {
    //           // <- note the lower-case w - see https://github.com/libp2p/js-libp2p/issues/576
    //           enabled: true,
    //         },
    //       },
    //       transports: [new WebSockets(), new WebRTCStar()],
    //     },
    //   },

    // const reader = new FileReader();
    // const swarmKey = Buffer.alloc(95);
    // writeKey(swarmKey);

    // swarmKey.write(
    //   "/key/swarm/psk/1.0.0/\n/base16/\n" +
    //     "f2f4523a0baf101ecc6177a6595895b9d66c0d449944799c38cc18d9e059ce21"
    // );

    // const pskRandom = uint8ArrayToString(randomBytes(32), "base16");
    // const key = uint8ArrayFromString(
    //   "/key/swarm/psk/1.0.0/\n/base16/\n" + pskRandom
    // );

    // const { tag, codecName, psk } = decodeV1PSK(key);
    // console.log(key);
    // console.log("tag:" + tag);
    // console.log("codecName:" + codecName);
    // console.log("psk:" + psk);

    // const psk = crypto.randomBytes(32).toString("hex");

    // console.log(psk);

    // console.log(swarmKey);

    // // Put the blob into the dabase
    // await transaction.objectStore("./ipfs/keys").put(swarmKey, "swarmKey");

    // var swarmBuffer = Buffer.from(swarmKey, "utf-8");
    // console.log(swamrKeyBlob);
    // const swarmKey = await reader.readAsArrayBuffer(swamrKeyBlob);

    // console.log(swarmBuffer);

    // const ipfsConfig = {
    //   repo: "ok" + Math.random(),
    //   EXPERIMENTAL: {
    //     pubsub: true,
    //   },
    //   config: {
    //     Bootstrap: [process.env.REACT_APP_IPFS_BOOTSTRAP],
    //     Addresses: {
    //       Swarm: ["/ip4/0.0.0.0/tcp/4002", "/ip4/127.0.0.1/tcp/4003/ws"],
    //     },
    //     Discovery: {
    //       MDNS: {
    //         Enabled: false,
    //         Interval: 10,
    //       },
    //       webRTCStar: {
    //         Enabled: true,
    //       },
    //     },
    //   },
    //   libp2p: libp2p,
    // };

    // console.log("ipfs start create");

    // const ipfs = await IPFS.create(ipfsConfig);

    // console.log("ipfs created");
    // console.log(ipfs);

    // console.log("init ipfs");
    // console.log(process.env.REACT_APP_IPFS_BOOTSTRAP);
    // await ipfs.bootstrap.clear();
    // await ipfs.bootstrap.add(process.env.REACT_APP_IPFS_BOOTSTRAP);
    // const res = await ipfs.bootstrap.list();

    // console.log(res.Peers);

    // const peerInfos = await ipfs.swarm.addrs();

    // peerInfos.forEach((info) => {
    //   console.log(info.id);
    /*
  QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt
  */

    // info.addrs.forEach((addr) => console.log(addr.toString()));
    /*
  /ip4/147.75.94.115/udp/4001/quic
  /ip6/2604:1380:3000:1f00::1/udp/4001/quic
  /dnsaddr/bootstrap.libp2p.io
  /ip6/2604:1380:3000:1f00::1/tcp/4001
  /ip4/147.75.94.115/tcp/4001
  */
    //     });
//   } catch (err) {
//     console.log(err);
//   }
// };

const addToIpfs = async (file) => {
  try {
    const { cid } = await ipfs.add(file);

    console.log(cid);

    return cid;
  } catch (err) {
    alert(err);
  }
};

// const getFromIpfs = async (cid) => {
//   try {
//     const res = await axios.get(cid);
//     console.log(res.data);

//     return res.data;
//   } catch (err) {
//     alert(err);
//   }
// };

export { addToIpfs };
