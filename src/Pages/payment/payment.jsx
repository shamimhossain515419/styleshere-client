import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from 'react-router-dom'
const Payment = () => {
     const classData = useLoaderData();
     const stripeKey = import.meta.env.PAYMENT_SECRET_KEY;
     console.log(stripeKey);
     const stripePromise = loadStripe('pk_test_51NEGeNGO16nc6gMPydwjPCMfVK7VSAJj5bqVJ1QDwytY7jarGEYbT6tQBZyTqgpY1c7o0UPYCHqUBEanvs1rZyoa00F2Fw14aY')
     console.log(classData);
     

     return (
          <div>
               <Elements stripe={stripePromise}>
                    <CheckoutForm />
               </Elements>
          </div>
     );
};

export default Payment;