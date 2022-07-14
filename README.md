# Remote Update Based on Blockchain & IPFS

This is a final project to obtain a bachelor's degree in computer engineering.
Created by Arsheldy Alvin

## Project purpose

The purpose of this project is to create a secured remote update system for devices.

## Part of the systems

- `frontend` folder is a web application for interface of admin to interact with blockchain network (add device/ firmware file)
- `smart-contract` folder contains smart contract file and deployment scripts to deploy the smart contract to blockchain network
- `node` folder is a python application for interface of user to interact with blockchain network from device directly

## Prerequisite

- 1 virtual machine as blockchain node
- 1 virtual machine as IPFS bootstrap node
- 1 Raspberry pi as client to run Python application to interact with blockchain and IPFS node
- `npm` installed
- `python v3.8` installed on Raspberry pi

## How to start

- Configure 1 virtual machine (VM) as blockchain node and 1 virtual machine as IPFS bootstrap node (Network is bridged to local network with static IP)
- Install `geth` in blockchain's VM and `go-ipfs` in IPFS's VM
- Run `puppeth` to configure `genesis.json` file
- Run `geth init` to initiate Ethereum blockchain network
- Run `geth account new` to create new account in the network and getting Externally Owned Account (EOA) address
- Create password file that contains password for etherbase account
- Run configured `geth` to start the private Ethereum blockchain network.
  This is a example of the configuration:

```shell
geth --networkid 4227 --mine --miner.threads 1 --datadir "." --nodiscover --http --http.addr 192.168.123.15 --http.port "8545" --port "30303" --http.corsdomain "*" --http.vhosts "*" --nat extip:192.168.123.15 --http.api eth,web3,personal,net --allow-insecure-unlock --unlock 0 --password ./password.txt --ipcpath "~/.ethereum/geth.ipc"
```

- Open `hardhat.config.js` to configure network name and network's URL
- Run `npx hardhat run scripts/deploy.js --network {network name}` to deploy smart contract to the blockchain network
- Generate `swarm.key` by using `ipfs-swarm-key-gen` in IPFS bootstrap node to enable private IPFS network
- Run `ipfs init` to initiate IPFS on each nodes (VM and Raspberry Pi)
- Run `ipfs bootstrap rm --all` to remove all bootstrap node on each nodes
- Run `ipfs bootstrap add /ip4/{ip bootstrap node}/tcp/{port}/ipfs/{peer id}` to add new bootstrap node on each nodes
- Open `ipfs config` to configure gateway, etc.
- Run `ipfs daemon` to start IPFS network on each nodes
- Run `npm install` to on frontend folder to install required library/ dependency
- Run `npm start` to start frontend in localhost
- Import account with json file from keystore on Metamask
- Login to ethereum blockchain network with the account
- Install all the libraries in Raspberry pi using `pip install`
- Run `streamlit run node.py` to run python application in Raspberry pi
