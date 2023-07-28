
import Title from "../../Components/Title/Tittle";

import { Outlet, NavLink } from "react-router-dom";
import Container from "../../Components/Container/Container";
const Product = () => {

 

     return (
          <div className=" mt-9">


               <Title title={"Product"} paragraph={"Trends in products can change rapidly, and what might have been trending in 2021 could be outdated by now. To find the most current trending product,"}></Title>
               <Container>

                    <div className=" my-10 flex justify-center flex-wrap items-center gap-6 ">
                         <NavLink className={({ isActive }) => isActive ? " text-xl font-bold   px-8 py-[5px] rounded-2xl bg-[#43a4ea] hover:border-none text-white  " : " bg-transparent border-[#43a4ea] border-2  rounded-2xl text-xl font-bold   px-8 py-[5px]"} to={'/product/bestSeller'}>Best Seller</NavLink>
                         <NavLink className={({ isActive }) => isActive ? " text-xl font-bold   px-8 py-[5px] rounded-2xl bg-[#43a4ea] hover:border-none text-white  " : " bg-transparent border-[#43a4ea] border-2  rounded-2xl text-xl font-bold   px-8 py-[5px]"} to={'/product/sale'}>sale</NavLink>
                         <NavLink className={({ isActive }) => isActive ? " text-xl font-bold   px-8 py-[5px] rounded-2xl bg-[#43a4ea] hover:border-none text-white  " : " bg-transparent border-[#43a4ea] border-2  rounded-2xl  text-xl font-bold   px-8 py-[5px]"} to={'/product/featured'}>Featured</NavLink>
                    </div>

                    <Outlet></Outlet>
               </Container>


          </div>
     );
};

export default Product;