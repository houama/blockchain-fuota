import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(() => ({
  userAddress: null,
  registerDevice: null,
  getAllRegisteredDevice: null,
  getSpecificRegisteredDevice: null,
  registerFirmware: null,
  getAllRegisteredFirmware: null,
  getSpecificRegisteredFirmware: null,
  verificationFromDevice: null,
  deviceList: [],
  firmwareList: [],
}));

export default useStore;
