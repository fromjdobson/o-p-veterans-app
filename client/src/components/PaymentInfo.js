import React from 'react'

import '../css/payment-info.css'

const PaymentInfo = () => {
    return (
        <div className='payment-info-container'>
            <div className='headline-container'>
                <h1>Payment Information</h1>
                <p className='body2'>B</p>
            </div>

            <div className='card-inputs-container'>
                <div className='card-name-container'>
                    <label for='cardNameInput'><h4>Name on card</h4></label>
                    <input type='text' id='cardNameInput' name='cardNameInput' />
                    <p className='helper-text'>M.Galikanokus</p>
                </div>
            </div>

            <div className='card-inputs-container'>
                <div className='card-number-container'>
                    <label for='cardNumberInput'><h4>Card Number</h4></label>
                    <input type='text' id='cardNumberInput' name='cardNumberInput' />
                    <p className='helper-text'>0000 0000 0000 0000</p>
                </div>

                <div className='card-expiration-container'>
                    <label for='cardExpirationInput'><h4>Expires</h4></label>
                    <input type='text' id='cardExpirationInput' name='cardExpirationInput' />
                    <p className='helper-text'>MM/YYYY</p>
                </div>

                {/* <div className='card-cvc-container'>
                    <label for='cardCvcInput'><h4>CVC</h4></label>
                    <input type='text' id='cardCvcInput' name='cardCvcInput' />
                    <p className='helper-text'>999</p>
                </div> */}
            </div>

            <div className='card-inputs-container'>

                <div className='card-cvc-container'>
                    <label for='cardCvcInput'><h4>CVC</h4></label>
                    <input type='text' id='cardCvcInput' name='cardCvcInput' />
                    <p className='helper-text'>999</p>
                </div>

                <div className='card-zipcode-container'>
                    <label for='cardNumberInput'><h4>Zipcode</h4></label>
                    <input type='text' id='cardZipcodeInput' name='cardZipcodeInput' />
                    <p className='helper-text'>12345</p>
                </div>
            </div>

            <div className='payment-buttons-container'>
                <button className='cancel-button'>Cancel</button>
                <button>Process Payment</button>
            </div>
        </div>
    )
}

export default PaymentInfo