const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const squareConnect = require('square-connect');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = 4000;
var admin = require('firebase-admin');
var cors = require('cors');
app.use(cors())
// Set the Access Token
const accessToken = process.env.ACCESS_TOKEN



var refreshToken;
var uid = '6QOK01bDhZNBCdL8fumFJnQ2V2T2'

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://op-vet.firebaseio.com/'
});

// admin.auth().setCustomUserClaims(uid, {admin: true}).then(() => {
// });

admin.auth().getUser(uid).then((userRecord) => {
  // The claims can be accessed on the user record.
  console.log(userRecord.customClaims['admin']);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

// Set Square Connect credentials and environment
const defaultClient = squareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken;

// Set 'basePath' to switch between sandbox env and production env
// sandbox: https://connect.squareupsandbox.com
// production: https://connect.squareup.com
defaultClient.basePath = 'https://connect.squareupsandbox.com';

app.post('/process-payment', async (req, res) => {
    console.log(req.body)
  const request_params = req.body;

  // length of idempotency_key should be less than 45
  const idempotency_key = crypto.randomBytes(22).toString('hex');

  // Charge the customer's card
  const payments_api = new squareConnect.PaymentsApi();
  const request_body = {
    source_id: request_params.nonce,
    amount_money: {
      amount: ((req.body.value) * 100), 
      currency: 'USD'
    },
    idempotency_key: idempotency_key
  };

  try {
    const response = await payments_api.createPayment(request_body);
    res.status(200).json({
      'title': 'Payment Successful',
      'result': response
    });
  } catch(error) {
    res.status(500).json({
      'title': 'Payment Failure',
      'result': error.response.text
    });
  }
});

app.listen(
  port,
  () => console.log(`listening on - http://localhost:${port}`)
);