import React from 'react';

const BuddyList = ({ buddies, selectedBuddy, setSelectedBuddy }) => {
  return (
    <div className="buddy-list">
      <div className='heading'>My Buddy</div>
      {buddies.map(buddy => (
        <div
          key={buddy.id}
          className={`buddy-list-item ${selectedBuddy && selectedBuddy.id === buddy.id ? 'active' : ''}`}
          onClick={() => setSelectedBuddy(buddy)}
        >
          {buddy.name}
        </div>
      ))}
    </div>
  );
};

export default BuddyList;
