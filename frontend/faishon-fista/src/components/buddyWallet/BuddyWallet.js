import React, { useState, useEffect } from 'react';
//import BuddyList from './components/BuddyList';
//import WalletDetails from './components/WalletDetails';
//import WalletContributions from './components/WalletContributions';
import './style.css';
import WalletContributions from './WalletContributions';
import WalletDetails from './WalletDetails';
import BuddyList from './BuddyList';

const BuddyWallet = () => {
  const [buddies, setBuddies] = useState([]);
  const [selectedBuddy, setSelectedBuddy] = useState(null);
  const [walletDetails, setWalletDetails] = useState(null);

  useEffect(() => {
    // Fetch buddies from backend (replace with actual API call)
    setBuddies([
      { id: 1, name: 'Alisha' },
      { id: 2, name: 'Vijaya' },
      { id: 3, name: 'Vaishnavi' },
      { id: 4, name: 'Astha' },
      { id: 5, name: 'Divyanshi' },
      { id: 6, name: 'ABc' }

    ]);
  }, []);

  useEffect(() => {
    if (selectedBuddy) {
      // Fetch wallet details for selected buddy (replace with actual API call)
      setWalletDetails({
        user1Contribution: 50,
        user2Contribution: 100,
        totalAmount: 150
      });
    }
  }, [selectedBuddy]);

  return (
    <div className="app-container">
      <BuddyList
        buddies={buddies}
        selectedBuddy={selectedBuddy}
        setSelectedBuddy={setSelectedBuddy}
      />
      {selectedBuddy && (
        <>
          <WalletContributions selectedBuddy={selectedBuddy} walletDetails={walletDetails} />
          <WalletDetails selectedBuddy={selectedBuddy} walletDetails={walletDetails} />
        </>
      )}
    </div>
  );
};

export default BuddyWallet;
