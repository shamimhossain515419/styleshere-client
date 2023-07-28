
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Title from "../../../Components/Title/Tittle";
import Container from "../../../Components/Container/Container";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const DashboardAddCard = () => {
     const { data, refetch, isLoading } = useQuery({
          queryKey: ['product'],
          queryFn: () => axios.get('https://styleshere-server-site.vercel.app/addcard')
     })

     const addData = data?.data;

     const handleDelete = (id) => {
          axios.delete(`https://styleshere-server-site.vercel.app/addcard/${id}`).then(result => {
               console.log(result);
               if (result) {
                    refetch()
                    toast.success('Successfully Add Card')
               }
          }).catch(error => {
               toast.error(`Error ${error.massage}`)
          })


     }

     return (

          <div>
               <div>
                    <Container>
                         <div>

                              <div className="overflow-x-auto">
                                   <table className="table table-xs textColor">
                                        <thead>
                                             <tr className=" textColor">
                                                  <th className=" text-xl  font-medium"> Id</th>
                                                  <th className=" text-xl font-medium">Name</th>
                                                  <th className=" text-xl font-medium">Image</th>
                                                  <th className=" text-xl font-medium">Price</th>
                                                  <th className=" text-xl font-medium">Quantity</th>
                                                  <th className=" text-xl font-medium">Action</th>

                                             </tr>
                                        </thead>
                                        <tbody>





                                             {
                                                  addData && addData.map((item, index) => <tr className=" my-2" key={item._id}>
                                                       <th className=" text-xl font-normal">{index + 1}</th>
                                                       <td className=" text-xl font-normal">{item?.name}</td>
                                                       <td> <img className=" h-14 w-14 rounded-md " src={item?.img1} alt="" /></td>
                                                       <td className=" text-xl font-normal">{item?.TotalPrice}$</td>
                                                       <td className=" text-xl font-normal">{item?.quantity}</td>
                                                       <td > 
                                                        <button onClick={() => handleDelete(item?._id)} className=" cursor-pointer text-xl font-normal text-red-500">Delete</button>
                                                        <Link to={`/dashboard/payment/${item?._id}`}  className=" cursor-pointer text-xl font-normal text-white px-2 py-1 rounded-md ml-3 bg-[#3296f9]">Pay</Link>
                                                       </td> 

                                                  </tr>)
                                             }

                                        </tbody>

                                   </table>
                              </div>
                         </div>

                         <Toaster

                              position="top-center"
                              reverseOrder={false}
                         />
                    </Container>
               </div>
          </div>
     );
};

export default DashboardAddCard;