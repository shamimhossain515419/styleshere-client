import { useLoaderData, useNavigate } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { Rating } from "@smastrom/react-rating";
import { useContext, useState } from 'react';
import { AuthContact } from "../../Route/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import addcardApi from "../../Components/ApI/addcardApi";
import Loading from "../../Components/Loading/Loading";

const AddCard = () => {
     const data = useLoaderData();
     const navigate = useNavigate()
     const [Product, refetch, isLoading] = addcardApi();
     const { user } = useContext(AuthContact);
     const { img1, img2, name, rating, description, category, price, _id } = data;

     const [img, setImg] = useState(img1);
     const [count, setCount] = useState(1);

     const hanbleupCount = () => {
          setCount(count + 1);
     }
     const hanbledownCount = () => {
          setCount(count - 1);

     }

     const AddCardData = { img1, email: user?.email, quantity: parseInt(count), name, TotalPrice: price * parseInt(count) }
     const handleAddCard = () => {
          console.log(AddCardData);
          axios.post('https://styleshere-server-site.vercel.app/addcard', { AddCardData })
               .then((response) => {
                    if (response) {
                         navigate('/')
                         refetch();
                         toast.success('Successfully Add Card')
                    }
                    console.log('Post request successful:', response);
               })
               .catch((error) => {
                    // Handle error, if needed
                    console.error('Error making post request:', error);
                    toast.error(`Error ${error.massage}`)
               });
     }

     return (
          <Container>
               {
                    user ? <>
                         <div className=" mt-10  grid md:grid-cols-2 gap-6">
                              <div>
                                   <div className="  flex gap-4 w-full">
                                        <img className="  object-cover rounded-md  w-full h-[450px]" src={img} alt="" />


                                   </div>
                                   <div className=" my-8  justify-center flex gap-3 items-start">
                                        <img onClick={() => setImg(img1)} className=" rounded-lg  object-cover w-40 h-40" src={img1} alt="" />
                                        <img onClick={() => setImg(img2)} className="  rounded-lg  object-cover w-40 h-40" src={img2} alt="" />
                                   </div>
                              </div>

                              <div className=" textColor">
                                   <h1 className=" text-4xl  font-semibold my-2">{name} </h1>
                                   <p className="  text-xl font-semibold "> Price: {price}$ </p>

                                   <p className=" text-lg my-3"> {description}  </p>

                                   <Rating
                                        style={{ maxWidth: 130 }}
                                        value={rating}
                                        readOnly
                                   />


                                   <div className=" mt-6 flex gap-4 items-center ">
                                        <button disabled={count == 1 || count <= 1} onClick={hanbledownCount} className=" px-2   text-xl font-extrabold border-2 border-blue-600">-</button>
                                        <p className=" px-2   text-base font-extrabold border-2 border-blue-600">{count}</p>
                                        <button onClick={hanbleupCount} className=" px-2   text-xl font-extrabold border-2 border-blue-600">+</button>
                                   </div>
                                   <div>
                                        <h1 className=" text-xl mt-4 font-medium"> Total Price: {parseInt(price) * count} $</h1>
                                   </div>
                                   <button onClick={handleAddCard} className=' text-xl font-bold border-2 border-none mt-7 px-8 py-[5px] rounded-2xl  bg-[#43a4ea] hover:border-none text-white'>Add to Card</button>
                              </div>
                         </div></> : <> <Loading></Loading></>
               }


               <Toaster

                    position="top-center"
                    reverseOrder={false}
               />

          </Container>
     );
};

export default AddCard;