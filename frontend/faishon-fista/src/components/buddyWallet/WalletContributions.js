import React from 'react';

const WalletContributions = ({ selectedBuddy, walletDetails }) => {
  if (!walletDetails) return null;

  return (
    <div className="wallet-contributions">
      <h1 className='p-2'>{selectedBuddy.name}</h1>
      <p>Your Contribution: ${walletDetails.user1Contribution}</p>
      <p>{selectedBuddy.name}'s Contribution: ${walletDetails.user2Contribution}</p>
      <hr />
      <h1 className='m-3 p-4'><b>Buddy Collections</b></h1>
      <img src="https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <img src="https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <img src="https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <img src="https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  );
};

export default WalletContributions;
