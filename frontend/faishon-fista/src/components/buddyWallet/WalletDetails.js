import React from 'react';

const WalletDetails = ({ selectedBuddy, walletDetails }) => {
  if (!walletDetails) return null;

  return (
    <div className="wallet-details">
      <h2>Wallet Details</h2>
      <p>Total Amount: ${walletDetails.totalAmount}</p>
      <p>Your Contribution: ${walletDetails.user1Contribution}</p>
      <p>{selectedBuddy.name}'s Contribution: ${walletDetails.user2Contribution}</p>
      <div className='request'>Request to buddy shop <span className='add'>+</span></div>
      <div className='chat'>Chat ^</div>
    </div>
  );
};

export default WalletDetails;
