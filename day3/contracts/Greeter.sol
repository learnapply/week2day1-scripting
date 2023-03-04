//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Greeter {
  string private greeting;
  bool public unlocked = true;

  constructor(string memory _greeting) {
    greeting = _greeting;
  }

  function greet() public view  returns (string memory) {
    return greeting;
  }

  function setGreeting(string memory _greeting) public {
    require(unlocked, "sorry this is locked");
    greeting = _greeting;
  } 

  function toggleUnlocked() public {
    unlocked = !unlocked;
  }
}