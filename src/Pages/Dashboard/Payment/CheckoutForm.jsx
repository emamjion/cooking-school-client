import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';


const CheckoutForm = ({price, booked}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const { user } = useContext(AuthContext);
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');


    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        if(price > 0){
            axiosSecure.post('/create-payment-intent', {price})
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
        }
    }, [price, axiosSecure]); // [price, axiosSecure]


    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        // console.log('card info', card);
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

        setProcessing(true);

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
        // console.log(paymentIntent);
        
        setProcessing(false);
        if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentMethod.id);
            
            // const transactionId = paymentIntent.id;
            // save payment information
            const payment = {
                email : user?.email,
                transactionId: paymentMethod.id,
                price,
                date : new Date(),
                quantity : booked.length,
                status : 'pending',
                bookeditems: booked.map(item => item._id),
                prevItemsId : booked.map(item => item.itemId),
                itemName : booked.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    alert('display message')
                }
            })
        }
    }
    
    return (
        <>
            <form onSubmit={handleSubmit} className='w-2/3 shadow-xl bg-white'>
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
                className='border-2 border-black p-4 rounded-lg'
                />
                <button type="submit" disabled={ !stripe || !clientSecret || processing } className='bg-slate-700 mt-6 px-6 py-2 w-full text-white rounded cursor-pointer font-medium'>
                Pay
                </button>
            </form>
            {cardError && <p className='text-red-500 mt-4 font-medium'> {cardError} </p>}
            {transactionId && <p className='text-green-500 font-medium mt-3'>Transaction complete!! & your txId is : {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;