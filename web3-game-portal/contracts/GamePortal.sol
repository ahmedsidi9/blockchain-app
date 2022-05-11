// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract GamePortal {
    uint256 gameGoals ;
    constructor() {
        console.log("Yo yo, I am a contract and I am very smart");
    }
    function score() public{
        gameGoals += 1 ;
        console.log("The player with the adress %s the has scored! ", msg.sender);
    }
    function getTotalGoals() public view returns (uint256) {
        console.log("Total of goals scored ", gameGoals);
        return gameGoals;
    }
}