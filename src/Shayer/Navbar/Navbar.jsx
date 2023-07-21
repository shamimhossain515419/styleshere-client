
import { useState } from 'react'
import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai';
import { FaBars, FaRegUserCircle } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
     const [toggleMenu, setToggleMenu] = useState(false);

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
                                        <NavLink href="#" className=" textColor text-xl">Product</NavLink>
                                        <NavLink href="#" className=" textColor text-xl">Blog </NavLink>
                                   </div>
                              </div>
                              {/* secondary */}
                              <div className="flex gap-6">
                                   <div className="hidden  sm:flex items-center gap-10">
                                        <div className="hidden   lg:flex items-center gap-4">
                                        <AiOutlineHeart className="h-6 w-6 cursor-pointer" />

                                        <FaRegUserCircle className="h-6 w-6  cursor-pointer" />



                                        <AiOutlineShopping className="h-6 w-6 cursor-pointer" />

                                        </div>
                                       </div>
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
                                        <div className="  flex     gap-4"> <FaRegUserCircle className="h-6 w-6 cursor-pointer" />  <h1 className=" textColor text-xl"> Login</h1></div>
                                        <div className="  flex    gap-4"> <AiOutlineShopping className="h-6 w-6 cursor-pointer" />  <h1 className=" textColor text-xl"> Card</h1></div>

                                   </div>
                              </div>
                         </div>
                    </div>
               </nav>
          </div>
     );
};

export default Navbar;