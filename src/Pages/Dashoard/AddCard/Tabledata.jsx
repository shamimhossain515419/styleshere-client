import axios from "axios";
import { toast } from "react-hot-toast";
import './tabledate.css'

const TableData = ({ item, index, refetch }) => {
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
     const handlePay = () => {

          console.log(item);
          axios.post('https://styleshere-server-site.vercel.app /order', item).then(result => {
               console.log(result);
               if (result) {

                    window.location.replace(result?.data?.url)

               }
          }).catch(error => {
               console.log(error);
          })

     } 

     
     return (

          <div className=" text-black shadow-sm p-2 md:p-4 rounded-2xl" >
               <div>
                    <div>
                         <h1 className="  text-black text-base md:text-lg xl:text-2xl font-normal my-6"> {index + 1}.  {item?.name}   </h1>
                    </div>

                    <div className=" md:flex  gap-3 ">
                         <div>
                              <img className=" w-full max-h-[250px] mx-auto rounded-md " src={item?.img1} alt="" />
                         </div>
                         <div>
                              <div className=" flex   flex-col   gap-2">
                                   <h1 className="   text-lg md:text-2xl  font-medium  mt-4"> Price: {item?.TotalPrice}$</h1>
                                   <h2 className=" text-lg md:text-2xl  font-medium  mt-4">Quantity: {item?.quantity}</h2>
                              </div>
                              <div className="  mt-2 ">
                                   <button onClick={() => handleDelete(item?._id)} className="button-1 mt-6" role="button" >Delete</button>
                                   <button onClick={handlePay} className="button-63  mt-6" role="button">Payment</button>
                              </div>
                         </div>

                    </div>

               </div>
          </div>
     );
};

export default TableData;