// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract FinkiCoin is ERC20{

    constructor() ERC20("FinkiCoin", "FKC") {
        _mint(msg.sender, 1000000e18);
    }
}