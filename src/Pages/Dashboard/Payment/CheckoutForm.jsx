import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        console.log('card info', card);
        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if(error){
            console.log('error', error);
            setCardError(error.message);
        }
        else{
            setCardError('');
            console.log('payment method', paymentMethod);
        }
    }
    
    return (
        <>
            <form onSubmit={handleSubmit} className='w-2/3'>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
                />
                <button type="submit" disabled={!stripe} className='bg-slate-700 mt-6 px-6 py-2 w-full text-white rounded cursor-pointer font-medium'>
                Pay
                </button>
            </form>
            {cardError && <p className='text-red-500 mt-4 font-medium'> {cardError} </p>}
        </>
    );
};

export default CheckoutForm;