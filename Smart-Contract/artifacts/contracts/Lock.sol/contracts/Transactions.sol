// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;



// Define the smart contract
contract DataLeasing  {
    // Structure to represent a leasing agreement
    struct LeasingAgreement {
        address dataProvider;
        address dataConsumer;
        uint256 duration; 
        uint256 startTime; 
        uint256 endTime;
        bool active; 
    }

    // Mapping to store leasing agreements by their unique ID
    mapping(uint256 => LeasingAgreement) public leasingAgreements;

    // Event to emit when a new leasing agreement is created
    event LeasingAgreementCreated(uint256 agreementId, address indexed dataProvider, address indexed dataConsumer, uint256 startTime, uint256 duration);

    // Function to create a new leasing agreement
    function createLeasingAgreement(address _dataConsumer, uint256 _duration) external {
        require(_dataConsumer != address(0), "Invalid data consumer address");
        require(_duration > 0, "Duration must be greater than zero");

        uint256 startTime = block.timestamp;
        uint256 agreementId = uint256(keccak256(abi.encodePacked(msg.sender, _dataConsumer, startTime)));

        leasingAgreements[agreementId] = LeasingAgreement({
            dataProvider: msg.sender,
            dataConsumer: _dataConsumer,
            duration: _duration,
            startTime: startTime,
            endTime: startTime + _duration,
            active: true
        });

        emit LeasingAgreementCreated(agreementId, msg.sender, _dataConsumer, startTime, _duration);
        
    }

    function revokeLeasingAgreement(uint256 _agreementId) external {
        require(leasingAgreements[_agreementId].dataProvider == msg.sender, "Only the data provider can revoke the agreement");
        require(leasingAgreements[_agreementId].active, "Agreement is already inactive");
        require(block.timestamp < leasingAgreements[_agreementId].endTime, "Agreement duration has expired");

        leasingAgreements[_agreementId].active = false;
    }


    function getAgreementId(address _dataProvider, address _dataConsumer, uint256 _timestamp) external pure returns (uint256) {
        return uint256(keccak256(abi.encodePacked(_dataProvider, _dataConsumer, _timestamp)));
    }
}
