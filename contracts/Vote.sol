// SPDX-License-Identifier: MIT


 pragma solidity ^0.7.4;
//  pragma solidity ^0.8.0;

 contract VotingApp  {
     struct vote {
             address voterAddress;
                bool choice;
     }
     struct voter {
         string voterName;
         bool voted;
     }
     uint private countResult;
     uint private finalResult;
     uint private totalVoter;
        uint private totalVote;

        address public ballotOfficialAddress;
        string public ballotOfficialName;
        string public proposal;
        
    
        mapping(uint=>vote) private votes;
        mapping(address=>voter) private voterRegister;

        enum State {Created, Voting,Ended }
        State public state;

        modifier condition(bool _condition){
            require(_condition);
            _;
        }
        
         modifier onlyOfficial() {
    require(msg.sender==ballotOfficialAddress);
             _;
         }
         
         modifier inState(State _state) {
    require(state==_state);
             _;
         }

constructor
 ()  {
    ballotOfficialAddress =msg.sender;
    ballotOfficialName =ballotOfficialName;
    // proposal=_proposal;
    state=State.Created;
}         
function addVote(address _voterAddress,string memory _voterName) public inState(State.Created) onlyOfficial {
    voter memory v;
    totalVoter++;
    v.voterName = _voterName;
    v.voted=false;
    voterRegister[_voterAddress]=v;
    
}


 }