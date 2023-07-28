import { useEffect, useState } from "react";
import Container from "../../../Components/Container/Container";
import { Rating } from "@smastrom/react-rating";


const HappyCustomer = () => {
     const [feedback, setFeedback] = useState([]);

     useEffect(() => {
          fetch('happycustomer.json').then(res => res.json()).then(data => {
               setFeedback(data)
          })
     }, [])

     console.log(feedback);
     return (
          <div className="   px-2 py-14 bg-[#f2f1f1] textColor">

               <div>


                    <div className=" grid md:grid-cols-4 gap-4 ">
                         {feedback.map(item => <div className=" p-2 shadow  rounded-md" key={item.id}>

                              <div className=" md:flex gap-2 justify-between">
                                   <div>
                                        <h1 className="  text-2xl mt-1 font-semibold my-2"> {item?.name} </h1>
                                        <Rating className=" text-black"
                                             style={{ maxWidth: 100 }}
                                             value={item?.rating}
                                             readOnly
                                        />
                                        <p>{item?.feedback}</p>

                                   </div>
                                   <div className=" w-[250px] mt-1 h-[150px] overflow-hidden">
                                        <img className=" rounded-xl  object-cover w-full  h-[150px]  " src={item?.img} alt="" />
                                   </div>


                              </div>
                              <hr className=" my-2  bg-black " />
                              <h2 className=" text-xl font-normal my-3"> {item.quality} </h2>

                         </div>)}
                    </div>

               </div>
          </div>
     );
};

export default HappyCustomer;