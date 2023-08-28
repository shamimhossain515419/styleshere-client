import { useContext } from 'react'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from "../../../Components/Container/Container";
import toast, { Toaster } from "react-hot-toast";
import TableData from "./Tabledata";
import { AuthContact } from "../../../Route/AuthProvider";
import Loading from '../../../Components/Loading/Loading';

const DashboardAddCard = () => {

     const { user } = useContext(AuthContact)
     const { data, refetch, isLoading } = useQuery({
          queryKey: ['product', user],
          queryFn: () => axios.get(`https://styleshere-server-site.vercel.app/addcard/${user?.email}`)
     })

     const addData = data?.data;




     return (

          <div>
               <div>
                    <Container>
                         <div className=" w-full">
                              {
                                    addData?.length  >=0 ? <><div className="  grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2   gap-3">
                                        {
                                             addData && addData.map((item, index) => <TableData index={index} refetch={refetch} item={item} key={item._id}></TableData>)
                                        }

                                   </div></> : <> <Loading></Loading> </>
                              }

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