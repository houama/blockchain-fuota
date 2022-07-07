//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Fuota {

    address private owner;

    event firmwareLog(address indexed from, string cid, string version);

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

    address[] private adminAccount;
    FirmwareStruct[] firmwareList;
    DeviceStruct[] deviceList;

    mapping(address => bool) admin;
    mapping(string => bool) firmwares;
    mapping(address => bool) devices;


    modifier onlyOwner() {
        require(msg.sender == owner, "Access denied, not owner!");
        _;
    }

    function addAdmin(address _newAdmin) external onlyOwner{
        adminAccount.push(_newAdmin);

        admin[_newAdmin] = true;
    }

    function getAllAdmin() public view returns (address[] memory){
        return adminAccount;
    }

    function isAdmin(address _adminAddr) public view returns (bool){
        return admin[_adminAddr];
    }

    function registerFirmware(string memory _cid, string memory _version ) external{
        FirmwareStruct memory firmware = FirmwareStruct({
            publisher : msg.sender,
            version : _version,
            cid : _cid,
            timestamp : block.timestamp,
            isRegistered : true
        });

        firmwareList.push(firmware);

        firmwares[_cid] = true;

        emit firmwareLog(msg.sender, _cid, _version);
            
    }

    function getAllRegisteredFirmware() public view returns (FirmwareStruct[] memory){
        return firmwareList;
    }

    function getSpecificRegisteredFirmware(string memory _key) public view returns (bool){
        return firmwares[_key];
    }

    function registerDevice(address _deviceIdentifier) external{
       DeviceStruct memory device = DeviceStruct({
       deviceIdentifier : _deviceIdentifier,
       deviceOwner : msg.sender,
       timestamp : block.timestamp,
       isRegistered : true
       });

       deviceList.push(device);

       devices[_deviceIdentifier] = true;
    
    }

    function getAllRegisteredDevice() public view returns (DeviceStruct[] memory){
        return deviceList;
    }

    function getSpecificRegisteredDevice(address _key) public view returns (bool){
        return devices[_key];
    }

    function requestUpdate() public view returns (address, string memory, string memory){
        FirmwareStruct storage last = firmwareList[firmwareList.length-1];
        bool deviceInfo = devices[msg.sender];

        if(deviceInfo){
            return (last.publisher, last.version, last.cid);
        }else{
            return (msg.sender, "Verification Failed!", "Verification Failed!");
        }
        
    }

    function verificationFromDevice(string memory _cid) public view returns(bool, address, string memory){
       bool deviceInfo = devices[msg.sender];
       bool firmwareInfo = firmwares[_cid];

        if(deviceInfo && firmwareInfo){
            return (true, msg.sender, _cid);
        }else return (false, msg.sender, "Verification Failed!");

    }
}