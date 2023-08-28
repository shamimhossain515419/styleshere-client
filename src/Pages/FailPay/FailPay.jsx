import { Link } from "react-router-dom";


const FailPay = () => {
     return (
          <div>
               <div className=' w-full min-h-[80vh] flex justify-center items-center flex-col'>


                    <h1 className=" text-red-600 my-1 text-xl md:text-3xl xl:text-4xl "> Success Full payment  </h1>
                    <p className=" text-base font-normal md:text-xl "> Please Try agin </p>
                    <Link className=' px-8 py-2  mt-7 rounded-lg bg-[#297dfb] text-white max-w-[250px] mx-auto' to={'/'}>Go Back Home</Link>
               </div>
          </div>
     );
};

export default FailPay;