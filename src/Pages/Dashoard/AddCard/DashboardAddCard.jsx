
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Title from "../../../Components/Title/Tittle";
import Container from "../../../Components/Container/Container";
import toast, { Toaster } from "react-hot-toast";

const DashboardAddCard = () => {
     const { data, refetch, isLoading } = useQuery({
          queryKey: ['product'],
          queryFn: () => axios.get('http://localhost:5000/addcard')
     })

     const addData = data?.data;

     const handleDelete = (id) => {
          axios.delete(`http://localhost:5000/addcard/${id}`).then(result => {
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
                                   <table className="table table-xs">
                                        <thead>
                                             <tr>
                                                  <th className=" text-xl font-normal"> Id</th>
                                                  <th className=" text-xl font-normal">Name</th>
                                                  <th className=" text-xl font-normal">Image</th>
                                                  <th className=" text-xl font-normal">Price</th>
                                                  <th className=" text-xl font-normal">Quantity</th>
                                                  <th className=" text-xl font-normal">Action</th>

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
                                                       <td onClick={() => handleDelete(item?._id)} className=" cursor-pointer text-xl font-normal text-red-500"> Delete</td>

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