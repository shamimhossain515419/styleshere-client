
import { useContext, useState } from 'react'
import { AiOutlineHeart, AiOutlineHome, AiOutlineSetting, AiOutlineShopping } from 'react-icons/ai';
import { FaBars, FaRegUserCircle } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom'
import { AuthContact } from '../../Route/AuthProvider';
import { FiLogIn } from 'react-icons/fi';
import addcardApi from '../../Components/ApI/addcardApi';
import { Toaster, toast } from 'react-hot-toast';
const Navbar = () => {

     const [toggleMenu, setToggleMenu] = useState(false);
     const [Open, setOpen] = useState(false)
     const { user, LogOut } = useContext(AuthContact);
     const [Product, refetch, isLoading] = addcardApi();

     const handleDelete = () => {
          LogOut().then(result => {
               toast.success('Successfully logout')
          }).catch(error => {
               console.log(error.massage);
          })
     }
     return (
          <div >
               <nav>
                    <div className="max-w-7xl mx-auto">
                         <div className="flex mx-auto justify-between w-5/6 ">
                              {/* Primary menu and logo */}
                              <div className="flex items-center gap-16 my-8">
                                   {/* logo */}
                                   <div>
                                        <NavLink
                                             href="/"
                                             className="flex gap-1 font-bold textColor items-center "
                                        >

                                             <h1 className=' text-xl  md:text-3xl font-bold uppercase'>StyleSphere</h1 >
                                        </NavLink>
                                   </div>
                                   {/* primary */}
                                   <div className="hidden lg:flex gap-8 ">
                                        <NavLink href="#" className=" textColor text-xl">
                                             Home
                                        </NavLink>
                                        <NavLink href="#" className=" textColor text-xl">Shopping</NavLink>
                                        <NavLink to={'/trending'} className=" textColor text-xl">Product</NavLink>
                                        <NavLink href="#" className=" textColor text-xl">Blog </NavLink>
                                   </div>
                              </div>
                              {/* secondary */}
                              <div className="flex gap-6">
                                   <div className="hidden  sm:flex items-center gap-10">
                                        <div className="hidden   lg:flex items-center gap-4">
                                             <AiOutlineHeart className="h-6 w-6 cursor-pointer" />
                                             {
                                                  user ? <img onClick={() => setOpen(!Open)} className=' cursor-pointer h-10 w-10 rounded-full ' src={user?.photoURL} /> : <FaRegUserCircle onClick={() => setOpen(!Open)} className="h-6 w-6  cursor-pointer" />
                                             }




                                             <Link to={'/dashboard/addcard'} className='   relative '>
                                                  <AiOutlineShopping className="h-6 relative w-6 cursor-pointer" />
                                                  <span className="  w-6 text-center text-xl bg-[#ff0000] absolute -top-6   left-2 font-medium  text-white rounded-full "> {Product?.length >= 0 ? `${Product?.length} ` : "0"} </span>
                                             </Link>
                                             {
                                                  user ? <> </> : <><Link to={'/register'} className=' text-xl font-normal text-[#047af8]'> Join </Link></>
                                             }
                                             

                                        </div>

                                   </div>
                                   {
                                        Open ? <div className='bg-[#FFF]  translate-y-2 duration-300  absolute  textColor top-20 z-50   py-3 px-8 rounded-md '>
                                             <Link onClick={() => setOpen(false)} to={'/dashboard'} className='  hover:text-blue-500 my-2 flex gap-2 items-center'>
                                                  <AiOutlineHome size={24}></AiOutlineHome>
                                                  <h2 className=' text-xl font-semibold'> Dashboard</h2>
                                             </Link>
                                             <hr />
                                             <Link onClick={() => setOpen(false)} className='my-2 hover:text-blue-500 flex gap-2 items-center'>
                                                  <AiOutlineSetting size={24}></AiOutlineSetting>
                                                  <h2 className=' text-xl font-semibold'> Setting</h2>
                                             </Link>
                                             <Link onClick={() => setOpen(false)} className='my-4 hover:text-blue-500 flex gap-2 items-center'>
                                                  <FiLogIn size={24}></FiLogIn>
                                                  <h2 onClick={handleDelete} className=' text-xl font-semibold'> Logout </h2>
                                             </Link>
                                        </div> : ""
                                   }
                                   {/* Mobile navigation toggle */}
                                   <div className="lg:hidden flex items-center">
                                        <button onClick={() => setToggleMenu(!toggleMenu)}>
                                             <FaBars className="h-6" />
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* mobile navigation */}
                    <div
                         className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"
                              }`}
                    >
                         <div className="px-8">
                              <div className="flex flex-col gap-8 font-bold tracking-wider">
                                   <NavLink href="#" className=" textColor text-xl">
                                        Home
                                   </NavLink>
                                   <NavLink href="#" className=" textColor text-xl">Shopping</NavLink>
                                   <NavLink href="#" className=" textColor text-xl">Product</NavLink>
                                   <NavLink href="#" className=" textColor text-xl">Blog</NavLink>
                                   <div className="  flex   flex-col gap-4">
                                        <div className=" flex    gap-4">  <AiOutlineHeart className="h-6 w-6 cursor-pointer" /> <h1 className=" textColor text-xl"> Bookmark</h1></div>
                                        <Link onClick={()=>setOpen(false)} to={'/login'} className="  flex     gap-4">  <FaRegUserCircle className="h-6 w-6 cursor-pointer" />  <h1 className=" textColor text-xl"> Login</h1></Link>
                                        <div className="  flex    gap-4"> <AiOutlineShopping className="h-6 w-6 cursor-pointer" />  <h1 className=" textColor text-xl"> Card</h1></div>

                                   </div>
                              </div>
                         </div>
                    </div>
               </nav>
               <Toaster

                    position="top-center"
                    reverseOrder={false}
               />
          </div>
     );
};

export default Navbar;