import { useContext } from "react";
import { AuthContact } from "../../../Route/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loading from "../../../Components/Loading/Loading";

const PaymentHistory = () => {

     const { user } = useContext(AuthContact)
     const { data, refetch, isLoading } = useQuery({
          queryKey: ['product', user],
          queryFn: () => axios.get(`https://styleshere-server-site.vercel.app/payment/${user?.email}`)
     })


     const HistoryDelete = (id) => {
          axios.delete(`https://styleshere-server-site.vercel.app/payment/${id}`).then(result => {
               console.log(result);
               if (result.data.deletedCount > 0) {
                 refetch()
                 toast.success('Successfully Clear History')
               }
          }).catch(error => {
               toast.error(`Error ${error.massage}`)
          })

     }

     const addData = data?.data;
     return (
          <div className=" p-2 md:p-4  xl:p-6">
               {
                    addData?.length >= 0 ? <>
                         <div className=" grid md:grid-cols-3   gap-4 items-center ">
                              {addData?.map(item => <div className=" shadow-md p-2 md:p-4 rounded-lg" key={item._id}>

                                   <div className="text-black my-4">
                                        <h1 className=" text-xl font-medium my-4 ">Name: {item?.name} </h1>
                                        <h1 className="  text-base md:text-xl xl:text-2xl   font-medium my-4 "> ID:  {item?.tranjectionId} </h1>
                                        <h1 className="  text-base md:text-xl xl:text-xl   font-medium my-4 "> Total payment :  {item?.TotalPrice}$</h1>
                                        <button onClick={() => HistoryDelete(item?._id)} className=" px-6 py-2 rounded-xl mt-4 border-2 border-black shadow-md text-base md:text-xl duration-200 font-semibold hover:text-white  hover:bg-black bg-white ">Cleat History</button>
                                   </div>

                              </div>)
                              }
                         </div></> : <>
                            <Loading></Loading>
                          </>
               }


          </div>
     );
};

export default PaymentHistory;