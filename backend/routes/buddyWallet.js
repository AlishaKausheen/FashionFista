const express = require('express');
const router = express.Router();
const axios = require('axios');

let buddyWallets = []; // In-memory storage 

// Your PhonePe merchant details
const MERCHANT_ID = 'MERCHANT_ID';
const SECRET_KEY = 'SECRET_KEY';
const CALLBACK_URL = 'CALLBACK_URL';

// Endpoint to create a buddy wallet
router.post('/create-buddy-wallet', (req, res) => {
  const { user1, user2 } = req.body;
  const newWallet = { id: buddyWallets.length + 1, user1, user2, user1Contribution: 0, user2Contribution: 0, totalAmount: 0, isPaid: false };
  buddyWallets.push(newWallet);
  res.json(newWallet);
});

// Endpoint to contribute to the buddy wallet
router.post('/contribute', (req, res) => {
  const { walletId, userId, amount } = req.body;
  const wallet = buddyWallets.find(w => w.id === walletId);

  if (wallet) {
    if (wallet.user1 === userId) {
      wallet.user1Contribution += amount;
    } else if (wallet.user2 === userId) {
      wallet.user2Contribution += amount;
    } else {
      return res.status(400).json({ error: 'User not part of this wallet' });
    }

    wallet.totalAmount += amount;
    res.json(wallet);
  } else {
    res.status(404).json({ error: 'Wallet not found' });
  }
});

// Endpoint to initiate payment
router.post('/initiate-payment', async (req, res) => {
  const { walletId } = req.body;
  const wallet = buddyWallets.find(w => w.id === walletId);

  if (wallet && !wallet.isPaid) {
    const payload = {
      merchantId: MERCHANT_ID,
      transactionId: `TXN_${Date.now()}`,
      amount: wallet.totalAmount,
      callbackUrl: CALLBACK_URL,
      // other necessary fields
    };

    try {
      const response = await axios.post('https://api.phonepe.com/v3/transaction/initiate', payload, {
        headers: {
          'Authorization': `Bearer ${SECRET_KEY}`
        }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(400).json({ error: 'Payment already made or wallet not found' });
  }
});

// Callback endpoint to handle payment response
router.post('/payment-callback', (req, res) => {
  const { transactionId, status, walletId } = req.body;
  const wallet = buddyWallets.find(w => w.id === walletId);

  if (wallet && status === 'SUCCESS') {
    wallet.isPaid = true;
  }

  res.status(200).send('Callback received');
});

module.exports = router;
