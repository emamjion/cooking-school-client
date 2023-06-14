import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useBooked from '../../../Hook/UseBooked';
import { useParams } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const {id} = useParams();
    if(!id){
        return <h1>Loading...</h1>
    }
    const [booked] = useBooked(id);
    const total = booked.reduce((prev, item) => prev + parseFloat(item.price), 0);
    const price = parseFloat(total.toFixed(2));
    
    return (
        <div className='w-full px-20'>
            <h1 className='text-3xl font-medium text-center mb-6'>Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    price={price}
                    booked={booked}
                />
            </Elements>
        </div>
    );
};

export default Payment;