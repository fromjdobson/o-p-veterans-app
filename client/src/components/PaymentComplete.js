import React from 'react'

import '../css/payment-complete.css'

const PaymentComplete = () => {
    return (
        <div className='payment-complete-container'>
            <div className='headline-container'>
                <h1>Thanks for supporting Vet Fest!</h1>
                <p className='body2'>Your transaction was succesful.</p>
            </div>

            <div className='receipt-view'>
                <p className='body1'>For</p>

                <div className='details-container'>
                    <div className='company-details'>
                        <p className='body2'>Bunty Soap Company</p>
                        <p className='subtitle'>galikanokus@buntysoapcompany.com</p>
                    </div>

                    <div className='user-logo'></div>
                </div>

                <div className='timestamp-container'>
                    <div className='left-info'>
                        <p className='body1'>Date</p>
                        <p className='body2'>April 1, 2020</p>
                    </div>

                    <div className='right-info'>
                        <p className='body1'>Date</p>
                        <p className='body2'>April 1, 2020</p>
                    </div>
                </div>

                <div className='total-container'>
                    <div className='left-info'>
                        <p className='body1'>Total Processed</p>
                        <p className='body2'>$1,100</p>
                    </div>

                    <div className='right-info'>
                        <p className='body1'>Recept #</p>
                        <p className='body2'>#99999-999</p>
                    </div>
                </div>
            </div>

            <button>Return to O.P. Veteran</button>
        </div>
    )
}

export default PaymentComplete