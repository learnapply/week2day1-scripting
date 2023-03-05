// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract PortToken {
  uint256 public constant totalSupply = 1000;
  uint256 public totalCreated = 0;
  mapping(address => uint256) public balances;
  address public immutable owner; 

  uint256 public constant CREATION_PRICE = 0.01 ether;

  constructor() {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "you are not the owner");
    _;
  }

  function create(uint256 _quantity) public onlyOwner{
    require(_quantity + totalCreated <= totalSupply, "totalSupply reached!");
    balances[msg.sender] += _quantity;
    totalCreated += _quantity;
  }

  function send(address to, uint256 _quantity) public {
    require(balances[msg.sender] >= _quantity, "not enough balance");
    balances[msg.sender] -= _quantity;
    balances[to] += _quantity;
  }

  function buy() public payable {
    require(msg.value >= CREATION_PRICE, "TOO MUCH MONEY");
    require(totalCreated < totalSupply, "totalSupply reached!");
    balances[msg.sender] += 1;
    totalCreated += 1;
  }

}