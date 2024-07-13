import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function WishList() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to '/login' route
  };

  return (
    <div className='text-center'>
      <p style={{ fontSize: '30px', fontWeight: 'bolder', color: '#404040', marginTop: '100px' }}>PLEASE LOG IN</p>
      <p style={{ fontSize: '20px' }} className='text-secondary'>Login to view items in your wishlist.</p>
      <Button
        variant='outlined'
        className='col-2 mt-5'
        style={{ marginBottom: '100px' }}
        onClick={handleLoginClick}
      >
        <b style={{ fontSize: '20px' }}>LOGIN</b>
      </Button>
    </div>
  );
}

export default WishList;
