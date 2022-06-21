// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract OnlyFans {
    struct Subscribe {
        string subscriberId;
        string idolId;
        uint amount;
        uint date;
    }
    receive() external payable {}
    uint commissionPercentage = 10;
    mapping(string => bool) public isSubscribes;
    mapping(string => Subscribe) public subscribes;

    function addNewSubscribe(address receiver, string memory subscriberId, string memory idolId, uint amount, uint date) external payable {
        string memory index = string(abi.encodePacked(subscriberId, idolId));
        subscribes[index] = Subscribe(subscriberId, idolId, amount, date);
        isSubscribes[index] = true; 
        payable(receiver).transfer(amount * (100 - commissionPercentage) / 100);
    }
    function checkSubscribe(string memory subscriberId, string memory idolId) external view returns (bool){
        string memory index = string(abi.encodePacked(subscriberId, idolId));
        if(isSubscribes[index]){
            return true;
        }else{
            return false;
        }
    }

}