import React, { useContext } from 'react';
import { useHistory } from "react-router-dom"
import { FormContext } from '../context/FormContext';

const Square = ({ paymentForm }) => {
    const history = useHistory()
    function pushToNextPage(){ 
        history.push("/form6")
    }
    const {qty, value } = useContext(FormContext)
    const config = {
        // Initialize the payment form elements
        
        //TODO: Replace with your sandbox application ID
        applicationId: process.env.REACT_APP_APPLICATION_ID,
        inputClass: 'sq-input',
        autoBuild: false,
        // Customize the CSS for SqPaymentForm iframe elements
        inputStyles: [{
            fontSize: '16px',
            lineHeight: '24px',
            padding: '16px',
            placeholderColor: '#a0a0a0',
            backgroundColor: 'transparent',
        }],
        // Initialize the credit card placeholders
        cardNumber: {
            elementId: 'sq-card-number',
            placeholder: 'Card Number'
        },
        cvv: {
            elementId: 'sq-cvv',
            placeholder: 'CVV'
        },
        expirationDate: {
            elementId: 'sq-expiration-date',
            placeholder: 'MM/YY'
        },
        postalCode: {
            elementId: 'sq-postal-code',
            placeholder: 'Postal'
        },
        // SqPaymentForm callback functions
        callbacks: {
            /*
            * callback function: cardNonceResponseReceived
            * Triggered when: SqPaymentForm completes a card nonce request
            */
            cardNonceResponseReceived: function (errors, nonce, cardData) {
            if (errors) {
                // Log errors from nonce generation to the browser developer console.
                console.error('Encountered errors:');
                errors.forEach(function (error) {
                    console.error('  ' + error.message);
                    alert(`Encountered errors, ${error.message}`);
                });
                
                return;
            }
               alert(`The generated nonce is:\n${nonce}`);
               fetch('http://localhost:4000/process-payment', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    nonce: nonce,
                    qty: qty, 
                    value: value
                  })
                })
                .catch(err => {
                  alert('Network error: ' + err);
                })
                .then(response => {
                  if (!response.ok) {
                    return response.text().then(errorInfo => Promise.reject(errorInfo));
                  }
                  return response.text();
                })
                .then(data => {
                  console.log(JSON.stringify(data));
                  alert('Payment complete successfully!\nCheck browser developer console form more details');
                  pushToNextPage()
                })
                .catch(err => {
                  console.error(err);
                  alert(`Payment failed to complete!\n ${err}`);
                });
            }
          }
    }
    paymentForm = new paymentForm(config);
    paymentForm.build();
    const requestCardNonce = () =>{
        paymentForm.requestCardNonce();
    }

    return (
        <div id="form-container">
            <div id="sq-card-number"></div>
            <div id="sq-expiration-date"></div>
            <div className="third" id="sq-cvv"></div>
            <div className="third" id="sq-postal-code"></div>
            <button id="sq-creditcard" className="button-credit-card" onClick={requestCardNonce}>Pay ${qty * value}</button>
        </div>
      
    )
}

export default Square;