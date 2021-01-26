import React from 'react'
import Styles from './Registration.module.css'
import abramslogo from './assets/images/logos/abrams-sponsor-logo.png'

export default function CheckoutPage() {

    return <div id={Styles['payment-page']}>

        <div id={Styles["summary-details"]}>
            <h3 className={Styles['left']}>Summary</h3>
            <div className={Styles['summary-row']}>
                <img src={abramslogo} alt='abrams' width="64" />
                <div className={Styles['sponsorship-details']}>
                    <p>Abrams Level Sponsorship</p>
                    <p>$2,500.00</p>
                </div>
            </div>

            <div className={Styles['summary-row left']}>
                <div className={Styles['booth-box']}>C03</div>
                <div className={Styles['sponsorship-details']}>
                    <p>Booth C03 Reservation</p>
                    <p>$200.00</p>
                </div>
            </div>
        </div>

        <form name='discount-code' id={Styles['discount-code']}>
            <div id={Styles['discount-code-input']}>
                <label className={Styles['left']}>Discount code</label>
                <input className={Styles['input']} type='text' />
            &nbsp; &nbsp;
            &nbsp; &nbsp;
        </div>
            <button className={Styles['secondary-button']}>Apply</button>
        </form>

        <div id={Styles['payment-total']}>
            <div>Subtotal $2,700.00</div>
            <div>Tax $0</div>
            <h2>Total $2,700.00</h2>
        </div>

        <form name='card-info' id={Styles['card-info']}>
            <h3 className={Styles['left']}>Payment</h3>

            <div className={Styles['input-container']}>
                <label className={Styles['left']}>Name on card</label>
                <input className={Styles['input']} type='text' size='30' name='name' />
            </div>
            <div className={Styles['input-container']}>
                <label className={Styles['left']}>Card number</label>
                <input className={Styles['input']} type='text' size='30' name='card' />
            </div>

            <div className={Styles['input-container']}>
                <div className="group-container">
                    <label className={Styles['left']}>Expires</label>
                    <input className={Styles['input']} type='text' name='month' /> &nbsp;/
                </div>
                <div className="group-container">
                    <label className={Styles['left']}> &nbsp;</label>
                    <input className={Styles['input']} type='text' name='year' />
                </div>
                <div className="group-container">
                    <label className={Styles['left']}>cvc</label>
                    <input className={Styles['input']} type='text' name='cvc' />
                </div>

            </div>
            <button className={Styles['primary-button']}>Pay $2,700.00</button>
        </form>
    </div>
}