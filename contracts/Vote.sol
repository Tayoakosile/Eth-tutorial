// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//  pragma solidity ^0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

/* 
Create a time based voting app whereby users can vote for candidates, whereby they have a week or two to vote.
And as the admin of the app, you would be able  to pause the app or stop the voting section.
 */



 contract BlockChainQuiz is ERC20,Ownable  {
     event tokensBurned(address indexed owner,uint256 amount,string message);
     event tokensMinted(address indexed owner,uint256 amount,string message);
     event additionalTokenMinted(address indexed owner,uint256 amount,string message);

      constructor() ERC20("BLKQUIZ", "BLQ") {
        _mint(msg.sender, 1000000*10**decimals());
        emit tokensMinted(msg.sender,10000*10**decimals(),'Token minted');
    }

    // Mint tokens for users
    function mint(address _to,uint256 _amount)public onlyOwner {
        _mint(_to,_amount);
        emit additionalTokenMinted(_to,_amount,'Additional token minted');
    }
    
    // Burn tokens for users
    function burn(uint256 _amount)public  onlyOwner {
        _burn(msg.sender,_amount);
        emit tokensBurned(msg.sender,_amount,'Tokens burned.');
    }

 }
