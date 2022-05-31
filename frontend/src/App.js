import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Home/Dashboard";
import Login from "./Login/Login";
import Device from "./Device/Device";
import Firmware from "./Firmware/Firmware";

function App() {
  return (
    <div className="App bg-slate-900">
      <Routes>
        <Route path="/" element={Login()} />
        <Route path="/dashboard" element={Dashboard()} />
        <Route path="/device" element={Device()} />
        <Route path="/firmware" element={Firmware()} />
      </Routes>
    </div>
  );
}

export default App;
