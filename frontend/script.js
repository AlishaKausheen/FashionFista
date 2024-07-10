async function createBuddyWallet() {
  const user1 = document.getElementById('user1').value;
  const user2 = document.getElementById('user2').value;

  const response = await fetch('/api/create-buddy-wallet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user1, user2 })
  });

  const result = await response.json();
  console.log(result);
}

async function contributeToWallet() {
  const walletId = parseInt(document.getElementById('walletId').value);
  const userId = document.getElementById('userId').value;
  const amount = parseInt(document.getElementById('amount').value);

  const response = await fetch('/api/contribute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ walletId, userId, amount })
  });

  const result = await response.json();
  console.log(result);
}

async function initiatePayment() {
  const walletId = parseInt(document.getElementById('paymentWalletId').value);

  const response = await fetch('/api/initiate-payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ walletId })
  });

  const result = await response.json();
  console.log(result);
}
