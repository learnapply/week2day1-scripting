// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Counter {
    uint public count;
    address public owner;

    constructor(uint256 _initialCount) {
      count = _initialCount;
      owner = msg.sender;
    }

    modifier onlyOwner() {
      require(msg.sender == owner, "not the owner");
      _;
    }

    // Function to get the current count
    function get() public view returns (uint) {
        return count;
    }

    function superInc() public onlyOwner {
      count += 10;
    }

    // Function to increment count by 1
    function inc() public {
        count += 1;
    }

    // Function to decrement count by 1
    function dec() public {
        // This function will fail if count = 0
        count -= 1;
    }
}
