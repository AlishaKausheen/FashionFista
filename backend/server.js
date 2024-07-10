const express = require('express');
const bodyParser = require('body-parser');
const buddyWalletRoutes = require('./routes/buddyWallet');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('frontend'));
app.use('/api', buddyWalletRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
