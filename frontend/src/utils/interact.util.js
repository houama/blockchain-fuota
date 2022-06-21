import { ethers } from "ethers";
import useStore from "../Store/store";
import FuotaContract from "../Artifacts/contracts/Fuota.json";

const connectBlockchainNetwork = async () => {
  try {
    if (!window.ethereum) {
      throw "No wallet found!";
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);

    await provider.send("eth_requestAccounts", []);

    const account = await provider.getSigner().getAddress();

    console.log(account);

    useStore.setState({ userAddress: account });

    connectContract(provider);
  } catch (err) {
    window.alert(err);
  }
};

const connectContract = (provider) => {
  // call smart contract
  const contract = new ethers.Contract(
    process.env.REACT_APP_CONTRACT_ADDR,
    FuotaContract.abi,
    provider
  );

  // get signer from provider
  const signer = provider.getSigner();

  // call function from smart contract
  const {
    registerDevice,
    getSpecificRegisteredDevice,
    getAllRegisteredDevice,
    registerFirmware,
    getAllRegisteredFirmware,
    getSpecificRegisteredFirmware,
    verificationFromDevice,
  } = contract.connect(signer);

  console.log(contract.connect(signer));

  // store smart contract function to global state management
  useStore.setState({
    registerDevice: (id) => registerDevice(id),
    getAllRegisteredDevice: () => getAllRegisteredDevice(),
    getSpecificRegisteredDevice: (addr) => {
      getSpecificRegisteredDevice(addr);
    },
    registerFirmware: (cid) => {
      registerFirmware(cid);
    },
    getAllRegisteredFirmware: () => {
      getAllRegisteredFirmware();
    },
    getSpecificRegisteredFirmware: (cid) => {
      getSpecificRegisteredFirmware(cid);
    },
    verificationFromDevice: (cid, publisher) => {
      verificationFromDevice(cid, publisher);
    },
  });
};

// const checkProvider = async () => {
//   if (window.ethereum) return true;

//   return false;
// };

export { connectBlockchainNetwork };
