import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { createLibp2p } from "libp2p";
import { WebSockets } from "@libp2p/websockets";
import { WebRTCStar } from "@libp2p/webrtc-star";
import { Mplex } from "@libp2p/mplex";
import { Noise } from "@chainsafe/libp2p-noise";
import { Bootstrap } from "@libp2p/bootstrap";

// document.addEventListener("DOMContentLoaded", async () => {
//   const webRtcStar = new WebRTCStar();

//   // Create our libp2p node
//   const libp2p = await createLibp2p({
//     addresses: {
//       // Add the signaling server address, along with our PeerId to our multiaddrs list
//       // libp2p will automatically attempt to dial to the signaling server so that it can
//       // receive inbound connections from other peers
//       listen: ["/ip4/172.20.13.246/tcp/8080"],
//     },
//     transports: [new WebSockets(), webRtcStar],
//     connectionEncryption: [new Noise()],
//     streamMuxers: [new Mplex()],
//     peerDiscovery: [
//       webRtcStar.discovery,
//       new Bootstrap({
//         list: [process.env.REACT_APP_IPFS_BOOTSTRAP],
//       }),
//     ],
//   });

//   // Listen for new peers
//   libp2p.addEventListener("peer:discovery", (evt) => {
//     const peer = evt.detail;
//     console.log(`Found peer ${peer.id.toString()}`);
//   });

//   // Listen for new connections to peers
//   libp2p.connectionManager.addEventListener("peer:connect", (evt) => {
//     const connection = evt.detail;
//     console.log(`Connected to ${connection.remotePeer.toString()}`);
//   });

//   // Listen for peers disconnecting
//   libp2p.connectionManager.addEventListener("peer:disconnect", (evt) => {
//     const connection = evt.detail;
//     console.log(`Disconnected from ${connection.remotePeer.toString()}`);
//   });

//   console.log("libp2p start");
//   await libp2p.start();
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
