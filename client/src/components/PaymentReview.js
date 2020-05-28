import React from 'react'

import '../css/payment-review.css'

const PaymentReview = () => {
    return (
        <div className='payment-review-container'>
            <div className='headline-container'>
                <h1>Payment Review</h1>
                <p className='body2'>Will be in left pane.</p>
            </div>

            <div className='wrapper'>
                <div className='outer-container'>
                    <p className='body2'>Selection Review</p>

                    <div className='review-container'>
                        <div className='labels-container'>
                            <p className='body1'>Vendor space reserved:</p>
                            <p className='body1'>Access to power:</p>
                            <p className='body1'>Vendor space size:</p>
                            <p className='body1'>Sponsorship Level:</p>
                        </div>

                        <div className='values-container'>
                            <p className='body2'>A22</p>
                            <p className='body2'>No</p>
                            <p className='body2'>10' x 20'</p>
                            <p className='body2'>Bradley</p>
                        </div>
                    </div>
                </div>

                <div className='outer-container'>
                    <p className='body2'>Payment Review</p>

                    <div className='review-container'>
                        <div className='labels-container'>
                            <p className='body1'>Vet Fest sponsorship:</p>
                            <p className='body1'>Vendor space:</p>
                            <p className='body1'>Amount:</p>
                        </div>

                        <div className='payment-values-container'>
                            <p className='body2'>$1,000</p>
                            <p className='body2'>$100</p>
                            <p className='body2'>$1,100</p>
                        </div>

                    </div>
                </div>

                {/* <div className='outer-container'>
                    <p className='body2'>Payment Review</p>

                    <div className='review-container'>
                        <div className='labels-container'>
                            <p className='body1'>Vet Fest sponsorship:</p>
                            <p className='body1'>Vendor space:</p>
                            <p className='body1'>Amount:</p>
                        </div>

                        <div className='payment-values-container'>
                            <p className='body2'>$1,000</p>
                            <p className='body2'>$100</p>
                            <p className='body2'>$1,100</p>
                        </div>

                    </div>
                </div> */}
            </div>
            

            
            


            

        </div>
    )
}

export default PaymentReview