// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract OnlyFans {
    enum LicenseType {FREE, FEE}
    uint constant LICENSE_LIFE_TIME = 30 days; 
    struct LicenseInfo {
        LicenseType licenseType;
        uint expiresOn;
    } 

    receive() external payable {}
    uint commissionPercentage = 10;
    mapping(bytes32 => bool) public isSubscribes;
    mapping(bytes32 => LicenseInfo) public subscribes;
    uint256 totalSubscribe = 0;
    
    function addNewSubscribe(address _receiver, string memory _subscriberId, string memory _creatorId, uint _amount, uint _type,uint _lifeTime) external payable {
        bytes32 index = keccak256(abi.encode(_subscriberId, _creatorId));
        subscribes[index] = LicenseInfo(LicenseType(_type), block.timestamp + (_lifeTime * LICENSE_LIFE_TIME));
        isSubscribes[index] = true; 
        totalSubscribe++;
        payable(_receiver).transfer(_amount * (100 - commissionPercentage) / 100);
    }

    function checkSubscribe(string memory _subscriberId, string memory _creatorId ) external view returns (string memory){
        bytes32 index = keccak256(abi.encode(_subscriberId, _creatorId));
        if(isSubscribes[index]){
            if(subscribes[index].expiresOn > block.timestamp){
                return 'VALID';
            }
            else{
                return 'EXPIRED';
            }
        } 
        return 'DOES NOT EXIST';
    }
    // ERC-20 functions
    // function totalSupply() public view returns (uint256){
    //     return totalSubscribe;
    // }
    // function balanceOf(address tokenOwner) public view returns (uint){}
    // function allowance(address tokenOwner, address spender){}
    // function transfer(address to, uint tokens) public returns (bool){}
    // function approve(address spender, uint tokens)  public returns (bool){}
    // function transferFrom(address from, address to, uint tokens) public returns (bool){}
}