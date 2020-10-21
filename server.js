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

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://op-vet.firebaseio.com/'
});

var db = admin.database();
var ref = db.ref("/arrayBooths")
const fs = require('fs')
const { parse, stringify } = require('svgson');



let data = ''
const readStream = fs.createReadStream('./client/src/images/opvetsvg.svg', 'utf8');

const row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
const powerBooths = ['C3', 'C4', 'C5', 'C6', 'C7', 'C15', 'C16', 'C17', 'C18', 'C19', 'D3', 'D4', 'D5', 'D6', 'D7', 'D15', 'D16', 'D17', 'D18', 'D19', 'F1', 'F2', 'F3','F4', 'F5', 'G1', 'G2','G3','G4','G5', 'I8','I9','I10', 'I11', 'I12', 'I13','I14']
let booth = []
let rowIndex = 0;

let svg;

function boothGen(rowSize, rowLetter){
    while(rowIndex < rowSize ){
        booth.push(rowLetter + rowIndex)
        rowIndex += 1
    }
    rowIndex = 1
}
row.map( row => {
    switch(row){
        case "A":
            boothGen(15, row)
            break
        case "B":
            boothGen(22, row)
            break
        case "C":
            boothGen(22, row)
            break
        case "D": 
            boothGen(22, row)
            break
        case "E": 
            boothGen(22, row)
            break
        case "F": 
            boothGen(22, row)
            break
        case "G": 
            boothGen(22, row)
            break
        case "H": 
            boothGen(22, row)
            break
        case "I": 
            boothGen(29, row)
            break
        case "J": 
            boothGen(8, row)
            break
        case "K": 
            boothGen(8, row)
            break
        case "L": 
            boothGen(8, row)
            break
        case "M": 
            boothGen(17, row)
            break
        default:
            console.log(booth)
    }
})

readStream.on('data', chunk => {
    data += chunk
}).on('end', () => {
    parse(data).then(json => {
        svg = json
        let boothTracker = 1
        
        for(let i = 1; i < svg["children"].length; i++){
            svg.children[i].booth = booth[boothTracker]
                if(powerBooths.includes(svg.children[i].booth)){ 
                    svg.children[i].power = true
                } else { 
                    svg.children[i].power = false
                }
            svg.children[i].choosen = false
            boothTracker++
        }
       
        // ref.set(svg.children)
        // console.log(svg.children)
    })
    .catch(err => { 
        console.log(err)
    })

    // data.children.map( (item, index) => item.booth = booth[index] )
    // console.log(data)
})


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
  const request_params = req.body;

  // length of idempotency_key should be less than 45
  const idempotency_key = crypto.randomBytes(22).toString('hex');

  // Charge the customer's card
  const payments_api = new squareConnect.PaymentsApi();
  const request_body = {
    source_id: request_params.nonce,
    amount_money: {
      // how much monet they are paying
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