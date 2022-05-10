//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Fuota {

    address private owner;

    // event Register(address from, string cid, string version);

    constructor(){
        owner = msg.sender;
    }

    struct FirmwareStruct{
        address publisher;
        string version;
        string cid;
        uint256 timestamp;
        bool isRegistered;
    }

    struct DeviceStruct{
        address deviceIdentifier;
        address deviceOwner;
        uint256 timestamp;
        bool isRegistered;
    }

    mapping(string => FirmwareStruct) firmwares;
    mapping(address => DeviceStruct) devices;


    modifier onlyOwner() {
        require(msg.sender == owner, "Access denied, not owner!");
        _;
    }

    function registerFirmware(string memory _cid, string memory _version ) external{
        FirmwareStruct memory firmware = FirmwareStruct({
            publisher : msg.sender,
            version : _version,
            cid : _cid,
            timestamp : block.timestamp,
            isRegistered : true
        });

        firmwares[_cid] = firmware;
            
    }


    function getSpecificRegisteredFirmware(string memory _key) public view returns (FirmwareStruct memory){
        return firmwares[_key];
    }

    function registerDevice(address _deviceIdentifier) external{
       DeviceStruct memory device = DeviceStruct({
       deviceIdentifier : _deviceIdentifier,
       deviceOwner : msg.sender,
       timestamp : block.timestamp,
       isRegistered : true
       });

       devices[_deviceIdentifier] = device;
    
    }

    function getSpecificRegisteredDevice(address _key) public view returns (DeviceStruct memory){
        return devices[_key];
    }

    function verificationFromDevice(string memory _cid, address _publisher, address _deviceIdentifier) public view returns(bool authorized){
       DeviceStruct storage deviceInfo = devices[_deviceIdentifier];
       FirmwareStruct storage firmwareInfo = firmwares[_cid];

        if(deviceInfo.isRegistered && firmwareInfo.isRegistered && firmwareInfo.publisher == _publisher){
            return true;
        }else return false;

    }
}