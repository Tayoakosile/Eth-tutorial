// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";


contract RoboPunksNFT is ERC721, Ownable {

    // This variables creation should be limited.
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxSupply;
    bool public isPublicMintEnabled;
    string public baseTokenUri;
    mapping (address=>uint) public walletMint;

constructor ()  payable ERC721('DragoPunks', 'DP') {
        mintPrice =0.02 ether;
        totalSupply =0;
        maxSuplly =1000;
        maxPerWallet = 3;   
}

function setIsPublicMintEnabled(address _isPublicMintEnabled)external onlyOwner {
    isPublicMintEnabled=_isPublicMintEnabled;
}
function setBaseTokenUri(string calldata _baseTokenUri) external onlyOwner {
    baseTokenUri = _baseTokenUri;

}

    function tokenURI(uint256 _tokenId) public view override external onlyOwner returns(string memory) {
        require(_exists(_tokenId),"Token does not exist");
        return string(abi.encodePacked(baseTokenUri.Strings.toString(_tokenId),'.json'));
    }

function withdraw (type name) external onlyOwner {
    (bool success)=withdrawWallet.call{value:address(this).balance}('');    
    require(success,'withdraw failed');
        
    }
}
function mint(uint256 _quantity) public payable{
    require(isPublicMintEnabled,'mining is not enabled');
    require(msg.value == _quantity * mintPrice,'wrong mint value');
}

}