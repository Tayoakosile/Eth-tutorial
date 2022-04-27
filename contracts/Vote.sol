// SPDX-License-Identifier: MIT
 pragma solidity ^0.7.4;
//  pragma solidity ^0.8.0;
/* 
Create a time based voting app whereby users can vote for candidates, whereby they have a week or two to vote.
And as the admin of the app, you would be able  to pause the app or stop the voting section.
 */



 contract VotingApp  {
     bool public isPaused;
     uint public timeStamp;
     
struct Voter {
    address voterAddress;
    string email;
}

 }
