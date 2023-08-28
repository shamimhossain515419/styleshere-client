
import { Link, useParams } from 'react-router-dom'
const SuccessPay = () => {
     const data = useParams()
     console.log(data);
     return (
          <div>
               <div className=' w-full min-h-[80vh] flex justify-center items-center flex-col'>
                           <h1 className=' text-red-500 text-base md:text-xl font-normal my-4 '>Your Tranjection ID:  {data?.Id} </h1>

                    <h1 className=" text-blue-600 my-1 text-xl md:text-3xl xl:text-4xl "> Success Full payment  </h1>

                    <Link className=' px-8 py-2  mt-7 rounded-lg bg-[#297dfb] text-white max-w-[250px] mx-auto' to={'/'}>Go Back Home</Link>
               </div>
          </div>
     );
};

export default SuccessPay;