import React from 'react';

const WalletContributions = ({ selectedBuddy, walletDetails }) => {
  if (!walletDetails) return null;

  return (
    <div className="wallet-contributions">
      <h2>{selectedBuddy.name}</h2>
      <p>Your Contribution: ${walletDetails.user1Contribution}</p>
      <p>{selectedBuddy.name}'s Contribution: ${walletDetails.user2Contribution}</p>
    </div>
  );
};

export default WalletContributions;
