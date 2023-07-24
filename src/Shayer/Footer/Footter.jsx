import Container from "../../Components/Container/Container";
import { BsFacebook, BsInstagram, BsGoogle } from 'react-icons/bs'
import { AiFillGithub ,AiOutlineMail,AiOutlineArrowRight} from 'react-icons/ai'
const Footer = () => {
     return (
          <div className=" bg-[#191818] text-white py-14">
               <Container>
                    <div className=" grid md:grid-cols-5 gap-4 ">
                         <div className=" col-span-2 px-3">
                              <h1 className=" text-xl  my-4  space-x-3 font-semibold  uppercase "> Don’t miss a thing</h1>
                              <p className=" text-base my-2 font-medium"> Enter your email below to be the first to know about new collections and product launches.</p>

                              <div className=" px-2 mt-3 rounded-xl bg-[#262323] relative flex  items-center justify-between"> 
                               <div className="  relative ">
                                        <input   className= "  w-full  py-1 px-4 bg-[#262323]   outline-none" type="text" placeholder=" Type massage" />
                                   </div>
                            
                              </div>
                         </div>
                         <div>
                              <h1 className=" text-xl font-bold my-4">  Company</h1>
                              <p>  Find a location nearest you.</p>
                              <p>  See Our Stores</p>


                              <p>   +391 (0)35 2568 4593</p>
                              <p> hello@domain.com</p>
                         </div>
                         <div>
                              <h1 className=" text-xl font-bold my-4"> Information</h1>
                              <div className="flex flex-col gap-1">
                                   <a href=" "> My account</a>
                                   <a href=""> About Us</a>
                                   <a href=""> My cart</a>
                                   <a href=""> Wishlist</a>
                                   <a href=""> Privacy Policy</a>
                              </div>
                         </div>
                         <div>
                              <h1 className=" text-xl font-bold my-4"> Social Media
                              </h1>
                              <div className=" flex  gap-4 items-center">
                                   <BsFacebook className=" cursor-pointer text-blue-500" size={28}></BsFacebook>
                                   <BsInstagram className=" text-[#d609cc] cursor-pointer" size={28}></BsInstagram>
                                   <BsGoogle className=" cursor-pointer text-[#ee1a1a]" size={28}></BsGoogle>
                                   <AiFillGithub className=" cursor-pointer text-white" size={28}></AiFillGithub>
                              </div>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Footer;