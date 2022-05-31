import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    () => ({
      userAddress: null,
      registerDevice: null,
      getSpecificRegisteredDevice: null,
      registerFirmware: null,
      getSpecificRegisteredFirmware: null,
      verificationFromDevice: null,
    }),
    {
      name: "web3-interact",
    }
  )
);

export default useStore;
