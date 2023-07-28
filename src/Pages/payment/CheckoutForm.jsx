import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
const CheckoutForm = () => {
     const [cardError, setCardError] = useState("");

     const stripe = useStripe();
     const elements = useElements();
     
     const handleSubmit = async (event) => {
          event.preventDefault()

          if (!stripe || !elements) {
               return;
          }
          const card = elements.getElement(CardElement)
          if (card == null) {
               return;
          }


          const { error, paymentMethod } = await stripe.createPaymentMethod({
               type: "card",
               card
          })
          if (error) {
               console.log(error);
               setCardError(error.message)
          }
          if (paymentMethod) {
               setCardError('')
               // console.log("paymentMethod", paymentMethod);
          }
     }

     return (
          <div className=' w-2/3 mx-auto text-black'>


               <form onSubmit={handleSubmit}>
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
                    <button className=' mt-3 block  rounded-md py-1 px-4 mx-auto bg-[#0c3ae1] text-white font-medium text-xl  text-center' type="submit" >
                         Pay
                    </button>

               </form>
               <p className=" text-xl font-medium text-red-500">  </p>
          </div>
     );
};

export default CheckoutForm;