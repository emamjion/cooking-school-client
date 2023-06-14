import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';


const CheckoutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const { user } = useContext(AuthContext);


    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', {price})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    }, []); // [price, axiosSecure]


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

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method : {
                    card : card,
                    billing_details : {
                        email : user?.email || 'Unknown',
                        name : user?.displayName || 'Unknown'
                    },
                },
            }
        );

        if(confirmError){
            // setCardError()
            console.log(confirmError);
        }
        console.log(paymentIntent);
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
                <button type="submit" disabled={ !stripe || !clientSecret } className='bg-slate-700 mt-6 px-6 py-2 w-full text-white rounded cursor-pointer font-medium'>
                Pay
                </button>
            </form>
            {cardError && <p className='text-red-500 mt-4 font-medium'> {cardError} </p>}
        </>
    );
};

export default CheckoutForm;