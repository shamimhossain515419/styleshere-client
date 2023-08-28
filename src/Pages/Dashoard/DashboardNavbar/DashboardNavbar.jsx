import { useContext, useState } from 'react';
import { BiSupport } from 'react-icons/bi';
import { AuthContact } from '../../../Route/AuthProvider';
import { AiOutlineHome, AiOutlineSetting, AiOutlineShopping } from 'react-icons/ai';
import { MdProductionQuantityLimits, MdRoundaboutRight } from 'react-icons/md';
import { CgSmartHomeLight } from 'react-icons/cg';
import { GiPayMoney } from 'react-icons/gi';
import { CiBookmark } from 'react-icons/ci';
import { FiLogIn } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
const DashboardNavbar = () => {
     const { user } = useContext(AuthContact);
     return (
          <div className=' textColor '>

               <img src={user?.photoURL} className='  my-4 block mx-auto h-24 w-24 rounded-full
                     border-2 border-blue-500 ' alt="" />

               <hr />
               <NavLink to={'/dashboard'}  className={({ isActive }) => isActive ? 'mt-10   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                    <AiOutlineHome size={24}></AiOutlineHome>
                    <h2 className=' text-xl font-semibold'> Dashboard</h2>
               </NavLink>
               <NavLink to={'/'} className={({ isActive }) => isActive ? 'mt-2   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                    <MdRoundaboutRight size={24}></MdRoundaboutRight>
                    <h2 className=' text-xl font-semibold'> About</h2>
               </NavLink>
               <NavLink to={'/dashboard/addcard'} className={({ isActive }) => isActive ? 'mt-2   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                    <MdProductionQuantityLimits size={24}></MdProductionQuantityLimits>
                    <h2 className=' text-xl font-semibold'> Add card</h2>
               </NavLink>

               <NavLink to={'/'} className={({ isActive }) => isActive ? 'mt-2   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                    <CgSmartHomeLight size={24}></CgSmartHomeLight>
                    <h2 className=' text-xl font-semibold'> Home</h2>
               </NavLink>
               <h1 className='  my-5  text-xl font-medium'> Product</h1>
               <hr />
               <NavLink to={'/'}     className={({ isActive }) => isActive ? 'mt-5   my-4 flex gap-2 items-center text-blue-500' : 'mt-5   my-4 flex gap-2 items-center'}>
                    <AiOutlineShopping size={24}></AiOutlineShopping>
                    <h2 className=' text-xl font-semibold'> Shopping</h2>
               </NavLink>
               <NavLink  to={'/'}  className={({ isActive }) => isActive ? 'mt-2   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                    <CiBookmark size={24}></CiBookmark>
                    <h2 className=' text-xl font-semibold'> Bookmark</h2>
               </NavLink>
               <p> </p>
               <NavLink to={'/dashboard/payment'}  className={({ isActive }) => isActive ? 'mt-2   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                    <GiPayMoney size={24}></GiPayMoney>
                    <h2 className=' text-xl font-semibold'> Payment Histroy</h2>
               </NavLink>

               <NavLink to={'/'}  className={({ isActive }) => isActive ? 'mt-2   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                    <BiSupport size={24}></BiSupport>
                    <h2 className=' text-xl font-semibold'> Support</h2>
               </NavLink>
               <hr className=' mt-5' />
               <NavLink to={'/'}  className='mt-2  flex gap-2 items-center'>
                    <AiOutlineSetting size={24}></AiOutlineSetting>
                    <h2 className=' text-xl font-semibold'> Setting</h2>
               </NavLink>
               <NavLink to={'/'} className={({ isActive }) => isActive ? 'mt-2   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                    <FiLogIn size={24}></FiLogIn>
                    <h2 className=' text-xl font-semibold'> Logout </h2>
               </NavLink>
          </div>
     );
};

export default DashboardNavbar;